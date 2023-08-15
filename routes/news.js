const news = require("../controllers/news");
const express = require("express");
const {upload,pathIsExist}= require('../server/uploader');

var app = express();
var bodyparser = require("body-parser");

let {saveData,updateById,getAll,getbyId,deleteByid,uploadFiles}= require('../controllers/news');

const router = express.Router();

router.get("/", (req, res) => {
  console.log("in news route" + JSON.stringify([...news.data]));
  console.log("in news route: " + news.data.length);

  res.render("news", { news: news.data });

  console.log(news.data);
});

router.get("/delete", (req, res) => {
  const id = req.query.newsId
console.log(id);
  if (id) {
    var data= news.data.find(val=> val.id==id);
    console.log("rec:" + data.id);
    let filtered=news.data.filter(val=> val.id !== data.id);
    console.log(filtered);
    news.data=filtered;
    res.redirect("/news");
  }
   else {
    console.log("not found:");
   
  res.redirect("/news");
}
});

router.post("/", (req, res, next) => {
  console.log("post type: " + req.body.newsType);
  console.log("post group: " + req.body.newsGroup);
  console.log("post title: " + req.body.newsTitle);
  console.log("post content: " + req.body.newsContent);
  console.log("post link: " + req.body.newsLink);
  let id = req.body.newsId;
  console.log(`id is : ${id}`);
  if (id) {
    console.log(`edit id  :${id}`);
    var data = news.data.find((val) => (val.id = id));
    console.log(data);
    news.data.push({
      id: id,
      title: req.body.newsGroup,
      date: new Date(),
      description: req.body.newsContent,
    });
    res.redirect("/news");
  } else {
    news.data.push({
      id: 22,
      title: req.body.newsGroup,
      date: Date.now(),
      description: req.body.newsContent,
    });
    res.redirect("/news");
  }

  // console.log("post action: "+req.body);
});


// all api of news 

router.get('/api/index',getAll);
router.post('/api/save',saveData);
router.post('/api/update',updateById);
router.post('/api/byid',getbyId);
router.post('/api/delete',deleteByid);


//login and sigin apis





//uploading file through multer 
    
router.post('/api/upload', pathIsExist("/uploads"),upload.array('file'),uploadFiles  )

module.exports = router;
