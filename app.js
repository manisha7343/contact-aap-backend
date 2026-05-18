    const express = require("express");
    const app = express();


    const connectDB = require("./config/db");
    const cron = require("./cron")
    // const rateLimiter = require("./middleware/rateLimit")
    const auth = require("./routes/authRoutes")
    const contact = require("./routes/contactRoute");
    const profile = require("./routes/userRoute");

    const dotenv = require("dotenv"); //a package to read .env file
    const cors = require("cors"); //cors

    //for deplyment (render)
    app.set("trust proxy", 1);

    //---------------------------------------------

    dotenv.config(); //to read .env file content for config()
    connectDB(); //mogodb connected calles here

    // MIDDLEWARE ------------------------------------------

    app.use(cors()); // used this becaus the front port was different  
    app.use(express.json()); //to read body
    app.use(express.urlencoded({ extended: true }));

    // app.use(rateLimiter)
    // ROUTES ------------------------------------

    app.use("/api/auth", auth);
    app.use("/api/user", profile);
    app.use("/api/contacts", contact);


    //API > only a server start point
    app.get("/", (req,res)=>{
        res.send("user manager ApI running ")
    });


    const PORT = process.env.PORT || 3001;
    app.listen(PORT, ()=>{
        console.log(`server is running on ${PORT}`)
    })


    // app.js
    // // Final URLs

    // /api/auth/register

    // /api/auth/login

    // /api/contacts


