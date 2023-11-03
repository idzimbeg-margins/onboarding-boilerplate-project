const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const user = require("../models/userModel");

const secretKey = "shhhhh";

const signKeys = (rememberMe, userId) => {
  const accessToken = jwt.sign({ id: userId, rememberMe }, secretKey, {
    expiresIn: "15min",
  });
  const refreshToken = jwt.sign({ id: userId, rememberMe }, secretKey, {
    expiresIn: "1h",
  });
  return { accessToken, refreshToken };
};

exports.login = catchAsync(async (req, res, next) => {
  const { username, rememberMe = false } = req.body;

  if (!username || (username !== "admin" && username !== "user"))
    return next(new AppError("Provide valid username", 400));

  const userId = username === "admin" ? 1 : 2;

  const { accessToken, refreshToken } = signKeys(rememberMe, userId);

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: rememberMe ? new Date("2024-01-01") : undefined,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: rememberMe ? new Date("2024-01-01") : undefined,
  });

  res.status(200).json({
    status: "success",
    data: { data: user[username] },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken || !refreshToken)
    return next(new AppError("Unauthorized", 401));

  try {
    const decoded = await promisify(jwt.verify)(accessToken, secretKey);

    req.user = decoded.id === 1 ? user.admin : user.user;

    next();
  } catch (err) {
    if (err.name !== "TokenExpiredError") return next(err);

    try {
      const refreshToken = req.cookies.refreshToken;

      const decoded = await promisify(jwt.verify)(refreshToken, secretKey);

      const { accessToken, refreshToken: newRefreshToken } = signKeys();

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date("2024-01-01"),
      });
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date("2024-01-01"),
      });

      return next();
    } catch (err) {
      next(err);
    }
  }
});

exports.logout = catchAsync(async (req, res, next) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date("2024-01-01"),
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date("2024-01-01"),
  });
  res.status(204).json({ status: "success" });
});

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new AppError("You don't have permission to perform this action.", 403)
      );

    next();
  };
