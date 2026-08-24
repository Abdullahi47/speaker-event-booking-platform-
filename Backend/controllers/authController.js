const User = require("../models/User");
const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");
const generateToken = require("../utils/generateToken");

const register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) throw new ApiError(400, "name, email and password are required");
  if (password.length < 8) throw new ApiError(400, "Password must contain at least 8 characters");
  if (await User.exists({ email: email.toLowerCase() })) throw new ApiError(409, "Email is already registered");

  const user = await User.create({ name, email, password, role });
  res.status(201).json({ success: true, token: generateToken(user.id), user });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ApiError(400, "email and password are required");

  const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
  if (!user || !(await user.comparePassword(password))) throw new ApiError(401, "Invalid email or password");

  res.json({ success: true, token: generateToken(user.id), user });
});

const me = asyncHandler(async (req, res) => {
  res.json({ success: true, user: req.user });
});

module.exports = { register, login, me };
