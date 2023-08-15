const userService = require("../services/user");
const jwt = require("jsonwebtoken");
const hashGen = require("bcrypt");
const asynchandler = require("express-async-handler");
const { name } = require("ejs");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  console.log(" parameters: " + name + email + password);

  const encodedPass = await hashGen.hash(password, 10);
  console.log(encodedPass);
  const data = await userService.saveRegister({ name, email, encodedPass });
  if (data) {
    res.json({ data });
  } else {
    res.json({
      err: data,
      message: "registration failed ",
    });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  
  const data = await userService.getLogin({ email });
  
  
  const decodedPass = await hashGen.compare(password, data.password);

  if (data && decodedPass) {
    const accessToken = jwt.sign(
      {
        data: {
          user_id: data.id,
          name: data.name,
          email: data.email,
        },
      },
      process.env.SECRET_KEY,
      { expiresIn: "5min" }
    );

    res.json({ success: 200, data:{
        id:data.id,
        name:name,
        email:email
    }, Token: accessToken });
  } else {
    res.json({
      err: data,
      data: "invalid login ",
    });
  }
};

const getAll = asynchandler(async (req, res, next) => {
  const data = await userService.allUser();

  
  if (data) {
    res.json(data);
  } else {
    throw new Error("no data found");
  }
});

const removeUser = asynchandler(async (req, res, next) => {


    console.log(req.params.id)
  const resp = await userService.removeData(req.params.id);

  if (resp) {
    res.json(resp);
  } else {
    throw new Error("some error on removing");
  }
});

module.exports = { signup, login, getAll, removeUser };
