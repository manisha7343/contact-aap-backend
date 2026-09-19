const express = require("express");
const router = express.Router();
const {
  registationValidation,
  verifyEmailOtpValidation,
  resendEmailOtpValidation,
  loginValidation,
  forgetPasswordValidation,
  resetPasswordValidation,
} = require("../validators/authValidator");

const {
  registerUser,
  verifyEmail,
  resnedEmailOtp,
  loginUser,
  forgetPassword,
  resetPassword,
} = require("../controllers/authController");

// const {
//   preAuthRateLimiter,
//   userRateLimiter,
// } = require("../middleware/rateLimit");




// register
router.post("/register", registationValidation, registerUser);

// verify email
router.post("/verify-email", verifyEmailOtpValidation, verifyEmail); 

// resend otp
router.post("/resend-email-otp", resendEmailOtpValidation, resnedEmailOtp); 

// login
router.post("/login", loginUser);

// forget password
router.post("/forget-password", forgetPasswordValidation, forgetPassword);

// reset password
router.post("/reset-password", resetPasswordValidation, resetPassword);


module.exports = router;
