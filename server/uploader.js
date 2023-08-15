const multer = require("multer");
const fs = require("fs");
const path = require("path");
let customDir = "/uploads";

const pathIsExist = (dirName)=>(req, res, next) => {
    customDir = path.join(process.cwd(), dirName);
  console.log(customDir);
  // Check if directory exists
  fs.access(customDir, (error) => {
    if (error) {
      // Directory doesn't exist, create it
      fs.mkdir(customDir, { recursive: true, mode: 0o755 }, (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Directory created successfully");
        }
        next();
      });
    } else {
      // Directory exists, continue
      console.log("Directory exists");
      next();
    }
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

module.exports = { upload, pathIsExist };
