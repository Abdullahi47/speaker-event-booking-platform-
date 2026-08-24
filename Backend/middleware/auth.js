const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");

const protect = asyncHandler(async (req, _res, next) => {
  const [scheme, token] = (req.headers.authorization || "").split(" ");
  if (scheme !== "Bearer" || !token) throw new ApiError(401, "Authentication token is required");
  if (!process.env.JWT_SECRET) throw new ApiError(500, "JWT_SECRET is not configured");
  let payload;
  try { payload = jwt.verify(token, process.env.JWT_SECRET); }
  catch (_error) { throw new ApiError(401, "Invalid or expired authentication token"); }
  const user = await User.findById(payload.userId);
  if (!user) throw new ApiError(401, "User for this token no longer exists");
  req.user = user;
  next();
});

const allowRoles = (...roles) => (req, _res, next) => {
  if (!roles.includes(req.user.role)) return next(new ApiError(403, "You do not have permission for this action"));
  next();
};

module.exports = { protect, allowRoles };
