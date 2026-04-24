const rateLimit = require('express-rate-limit');
const { RedisStore } = require('rate-limit-redis');
const redis = require('../config/redis');

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: {
    status: 429,
    message: "Too many requests! Try after one minute."
  },
  standardHeaders: true,
  legacyHeaders: false,
  store: new RedisStore({
    client: redis,  // ✅ version 4 mein seedha client deo
  }),
});

module.exports = rateLimiter;