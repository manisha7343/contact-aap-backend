const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")// middleware
const {UpdateUserValdation} = require("../validators/userValidator")
const { 
    getProfile,  
    updateProfile,
} = require("../controllers/userContoller");



// ########### get  profile ###################
router.get("/profile", auth, getProfile)


// ######### update profile ###############
router.put("/profile/:id", auth, UpdateUserValdation, updateProfile)



module.exports = router;