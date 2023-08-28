
const errorHandler = (error, req, res, next) => {
    console.error("An error occurred:", error);
  
    // Set a default status code if not provided
    const statusCode = error.statusCode || 500;
  
    // Set a default error message if not provided
    const errorMessage = error.message || "Internal Server Error";
  
    res.status(statusCode).json({ error: errorMessage });
  };

module.exports= errorHandler;