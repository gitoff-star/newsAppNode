const { newsModel } = require("../models/news");
const path = require("fs");


const getAll = (req, res, next) => {
  newsModel
    .find()
    .then((response) => {
      res.json({ response });
    })
    .catch((err) => {
      res.json({ err: "something went wrong" + err });
    });
};

const getbyId = (req, res, next) => {
  let id = req.body.id;
  newsModel
    .findById(id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      req.json({
        message: "something went wrong",
      });
    });
};

const updateById = (req, res, next) => {
  let dataId = req.body.id;

  console.log(dataId);
  const user = {
    group: req.body.group,
    type: req.body.type,
    title: req.body.title,
    link: req.body.link,
    content: req.body.content,
    date: new Date(),
  };

  // remove the _id field from the user object
  delete user._id;

  newsModel
    .findByIdAndUpdate(dataId, { $set: user })
    .then((response) => {
      res.json({
        message: "data is updated successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "error found " + err,
      });
    });
};

const saveData = (req, res, next) => {
  console.log(req.url);
  console.log(req.body.group);
  const user = new newsModel({
    group: req.body.group,
    type: req.body.type,
    title: req.body.title,
    link: req.body.link,
    content: req.body.content,
    date: new Date(),
  });

  user
    .save()
    .then((response) => {
      res.json({
        message: "data is saved successfully" + response.id,
      });
    })
    .catch((err) => {
      res.json({
        message: "error found " + err,
      });
    });
};

//delete

const deleteByid = (req, res, next) => {
  const id = req.body.id;

  newsModel
    .findByIdAndRemove(id)
    .then((response) => {
      if (response) {
        res.json({
          message: "deleted successfully",
        });
      } else
        res.json({
          message: "not found ",
        });
    })
    .catch((err) => {
      message: "something went wrong";
    });
};

const uploadFiles = (req, res, next) => {
  try {
  
    const param = req.files;
    console.log(param);

    console.log(req.url);
    console.log(req.body.group);
    const user = new newsModel({
      group: req.body.group,
      type: req.body.type,
      title: req.body.title,
      link: req.body.link,
      content: req.body.content,
      date: new Date(),
    });
    user
      .save()
      .then((response) => {
        res.json({
          message: "data is saved successfully" + response.id,
        });
      })
      .catch((err) => {
        res.json({
          message: "error found " + err,
        });
      });
  } catch (err) {
    res.json({
      message: "error uploading file " + err,
    });
  }
};

module.exports = {
  saveData,
  updateById,
  getAll,
  getbyId,
  deleteByid,
  uploadFiles,
};
