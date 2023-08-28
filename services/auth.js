const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const auth = asyncHandler(async (req, res, next) => {
  let Token;

  const authHead = req.headers.authorization || req.headers.Authorization;
  console.log(`token is :`);
  if (authHead) {
    
    if (authHead.startsWith("Bearer") || authHead.startsWith("bearer")) {
      
      const token = authHead.split(" ")[1]; // Extract the token from the "Bearer <token>" format
      

      try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // Verify the token using the secret key
       
       return res.status(201);
      } catch (err) {
        
        res.status(401).json({ error: "Authorization failed" }); // Send a 401 Unauthorized status and error message
        next();
        // return ;
      }
    }else{
      res.status(401).json({ error: "Authorization header missing" }); // 
    }
    
  } else {
    res.status(401).json({ error: "Authorization header missing" }); // Send a 401 Unauthorized status and error message
   next();
    // return;
  }

  // If the token is valid, continue processing the request
  // next();
});

module.exports = auth;

