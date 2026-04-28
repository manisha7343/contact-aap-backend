const { log } = require("console");
const User = require("../model/user");
require("dotenv").config();

//########################### get profile ##############################
// wrong - projection

const getProfile = async (req, res) => {
  try {

    // console.log("headres -----------", req.headers.authorization);
    
  
    //DB - user find
    const user = await User.findById(req.user, {
      first_name: 1,
      last_name: 1,
      email: 1,
    });

    // console.log("user : ", user);

    //terminal
    if (!user) {
      console.log("user not exits");
      res.status(404).json({
        success: false,
        message: "user not exits",
        data: user,
      });
    } else {
      console.log("user profile fetched successfully");
      res.status(200).json({
        success: true,
        message: "User profile fetched successfully",
        user: user,
      });
    }
  } catch (error) {
    console.log("Error to get profile", error);

    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

//##################### update profile ##################
// fail
const updateProfile = async (req, res) => {
  try {

    const {first_name, last_name } = req.body;

    //DB
    const result = await User.updateOne({ _id: req.user }, 
      {
        $set:{
          first_name: first_name,
          last_name: last_name
        }
      }
    );
    

    //if user not found
    if (result.matchedCount === 0) {
      console.log("user not found");
      return res.status(404).json({
        success: false,
        message: "user not found.",
      });
    }

    if (result.modifiedCount === 0) {
      return res.status(200).json({
        success: true,
        message: "profile updated succesfully!.",
      });
    }

    // if (result.matchedCount > 0 && result.modifiedCount > 0) {
    //   console.log("User updated successfully");
    //   return res.status(200).json({
    //     success: true,
    //     message: "User profile updated successully!",
    //   });
    // }

    console.log("User updated successfully");
    return res.status(200).json({
      success:true,
      message:"User profile updated successfully!"
    })

  } catch (error) {
    console.log("Error in upadting user : ", error);

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while updating your profile. Please try again later.",
    });
  }
};


module.exports = {
  getProfile,
  updateProfile,
 
};
