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


//register
router.post("/register", registationValidation, registerUser);

//verify emial
router.post("/verify-email", verifyEmailOtpValidation, verifyEmail);

//resend verify Emial otp
router.post("/resend-email-otp", resendEmailOtpValidation, resnedEmailOtp);

// user login
router.post("/login", loginValidation, loginUser);

//forget password
router.post("/forget-password", forgetPasswordValidation, forgetPassword);


//reset password
router.post("/reset-password", resetPasswordValidation, resetPassword);

module.exports = router;
