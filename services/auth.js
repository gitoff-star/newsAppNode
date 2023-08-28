const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const auth = asyncHandler(async (req, res, next) => {
  let Token;

  const authHead = req.headers.authorization || req.headers.Authorization;
  
  if (authHead) {
    
    if (authHead.startsWith("Bearer") || authHead.startsWith("bearer")) {
      
      const token = authHead.split(" ")[1]; // Extract the token from the "Bearer <token>" format
      

      try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // Verify the token using the secret key
        console.log(`token is verified:`);
       return res.status(201);
      } catch (err) {
        console.log(`token error :`);
        err.message="authorization failed";
        res.status(401);
        next(err);
      }
    }else{
    
      res.status(401);
      next();
    }
    
  } else {
    
    res.status(401);
    next();
  //  next();
    // return;
  }
  // If the token is valid, continue processing the request
  
});

module.exports = auth;

