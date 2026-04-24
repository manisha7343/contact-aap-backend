const { createClient } = require('redis');

const redis = createClient({
  username: "default",
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

redis.on("error", (err) => console.log("Redis Client Error", err));
redis.on("connect", () => console.log("Redis connected ✅"));

redis.connect();

module.exports = redis;