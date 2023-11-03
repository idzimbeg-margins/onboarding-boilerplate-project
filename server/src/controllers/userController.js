const catchAsync = require("../utils/catchAsync");
const user = require("../models/userModel");

exports.getMe = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: { data: req.user },
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
  });
});
