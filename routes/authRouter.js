const express = require("express")
const router = express.Router()
const auth = require('../controllers/authController')

router.post("/register", auth.signupController);
router.post("/login", auth.loginController);
router.get("/refresh", auth.refreshAccessTokenController);
router.post("/logout", auth.logoutController);

module.exports = router;