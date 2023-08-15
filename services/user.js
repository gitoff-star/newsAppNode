const { response } = require("../app");
const { data } = require("../models/news");
const { userModel } = require("../models/user");

const saveRegister = async (data) => {
  const { name, email, encodedPass } = data;
  console.log("inside service" + name, email, encodedPass);
  const user = new userModel({
    name: name,
    email: email,
    password: encodedPass,
  });

  const dt = await user
    .save()
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(`failed to add ${err}`);
      return err;
    });

  return dt;
};

const getLogin = async (userCred) => {
  const { email } = userCred;

  const data = await userModel.findOne({ email }).exec();

  return data;
};

const allUser = (async) => {
  const users = userModel
    .find()
    .then((dt) => {
      return dt;
    })
    .catch((err) => {
      throw new Error("no user found");
    });

  return users;
};

const removeData = async (id) => {
  let remove;


  if (id) {
    console.log(`in service with id : ${id}`);
    remove = userModel
      .deleteOne({_id:id})
      .then((resp) => {
        console.log(resp);
        return resp;
      })
      .catch((err) => {
        return err;
      });
  } else {
    remove = userModel
      .deleteMany()
      .then((resp) => {
        return resp;
      })
      .catch((err) => {
        return err;
      });
  }

  return remove;
};

module.exports = { saveRegister, getLogin, allUser, removeData };
