const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const auth = asyncHandler(async (req, res, next) => {
  let Token;

  const authHead = req.headers.authorization || req.headers.Authorization;
  console.log('here in auth');
  if (authHead) {
    console.log('here in auth');
    if (authHead && authHead.startsWith("Bearer")) {
      const token = authHead.split(" ")[1];
      const verifyToken = jwt.verify(
        token,
        process.env.SECRET_KEY,
        (err, decoder) => {
          if (err) {
            res.status(401);
            throw new Error("Authorization failed");
          } else console.log("decoder : ",decoder);
        }
      );
    }
  }else{
    res.status(503);
    throw new Error('not a valid token');
  }

  next();
});

module.exports = auth;
