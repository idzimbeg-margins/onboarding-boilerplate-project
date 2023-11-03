const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/me", authController.protect, userController.getMe);

router.get(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  userController.getAllUsers
);

module.exports = router;
