const notFound = (req, _res, next) => {
  const error = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

const errorHandler = (error, _req, res, _next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal server error";
  if (error.name === "ValidationError") { statusCode = 400; message = Object.values(error.errors).map((item) => item.message).join(", "); }
  if (error.code === 11000) { statusCode = 409; message = `Duplicate value for: ${Object.keys(error.keyPattern || {}).join(", ")}`; }
  if (error.name === "CastError") { statusCode = 400; message = `Invalid ${error.path}`; }
  res.status(statusCode).json({ success: false, message });
};

module.exports = { notFound, errorHandler };
