const rateLimit = require('express-rate-limit');


//Login Rate Limiter Configuration

const rateLimiter = rateLimit({

    windowMs: 1 * 60 * 1000,
    max:5,
    message:{
        status: 429,
        message: "Too many requests! Try after one minute."
    },
    standardHeaders: true,
    legacyHeaders: false,

});

module.exports = rateLimiter;






