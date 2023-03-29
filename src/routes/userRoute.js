const express = require("express");
const { userController } = require("../controllers");
const { protect } = require("../middlewares/authMiddleware");

const route = express.Router();

route.post("/", userController.registerUser);
route.post("/login", userController.loginUser);
route.get("/me", protect, userController.getMe);

module.exports = route;
