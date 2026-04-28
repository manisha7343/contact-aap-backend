const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")// middleware
const {UpdateUserValdation} = require("../validators/userValidator")
const { 
    getProfile,  
    updateProfile,
} = require("../controllers/userContoller");


const {
  preAuthRateLimiter,
  userRateLimiter,
} = require("../middleware/rateLimit");



// ########### get  profile ###################
router.get("/profile", auth, userRateLimiter, getProfile)


// ######### update profile ###############
router.put("/profile/:id", auth, UpdateUserValdation, updateProfile)



module.exports = router;