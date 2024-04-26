const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");
const { register } = require("../controllers/authController");

router.post("/Login", login);
router.post("/Register", register); 

module.exports = router;
