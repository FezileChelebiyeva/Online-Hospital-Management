module.exports.register = async (req, res) => {
  const { email, password, companyName, fullName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new userModel({
      companyName: companyName,
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    const result = await newUser.save();
    const { password, ...data } = result.toJSON();

    const token = createToken(newUser._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: newUser._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message === "User not found")
    errors.email = "Email is not registered";

  if (err.message === "Incorrect password")
    errors.password = "Password is incorrect";

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });

    if (!user) {
      throw Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch);
    console.log(password);
    console.log(user.password);
    if (!passwordMatch) {
      throw Error("Incorrect password");
    }

    // if (!(await bcrypt.compare(password, user.password))) {
    //   throw Error("nocoreect");
    // }
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({ user: user, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "secret");
};

const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret", async (err, decodedToken) => {
      if (err) {
        res.json({ err });
        next();
        console.log("error:", err);
      } else {
        const user = await User.findById(decodedToken.id);

        if (user) {
          res.json({ status: true, user: user._id });
        } else {
          res.json({ status: false });
          next();
        }
      }
    });
  } else {
    res.json({ status: false });
    next();
  }
};
// buda eger login olmuyubsa admin sehifesine kecmey olmasin deyedi



 const {
    login,
    register,
    updateUserData,
    getUserById,
    emailChanged,
    passwordChanged,
    signatureChanged,
    imageDownload,
  } = require("../controllers/authControllers");
  const { checkUser } = require("../middlewares/authMiddlewares");
  
  function userRouter(app) {
    app.get("/user/:id", getUserById);
    app.post("/", checkUser);
    app.post("/register", register);
    app.post("/login", login);
    app.patch("/email/:id", emailChanged);
    app.patch("/password/:id", passwordChanged);
    app.patch("/uploads/:id", imageDownload);
    app.patch("/signature/:id", signatureChanged);
    app.put("/user/:id", updateUserData);
  }
  
  module.exports = userRouter;
// bunlarda routeler di\




module.exports.emailChanged = async (req, res) => {
    try {
      const { id } = req.params;
      const { newEmail, password, activity, activityDate } = req.body;
      const user = await userModel.findById(id);
  
      if (!user) {
        throw Error("User not found");
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw Error("Incorrect password");
      }
  
      const existingUser = await userModel.findOne({ email: newEmail });
      if (existingUser && existingUser._id.toString() !== id) {
        throw Error("Email address already in use");
      }
  
      const updatedUser = await userModel.findByIdAndUpdate(id, {
        email: newEmail,
      });
      const updateActivity = await userModel.findByIdAndUpdate(id, {
        $push: {
          activity: { activityName: activity, activityDate: activityDate },
        },
      });
      res.status(200).json({ message: "Email address changed successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };



  module.exports.passwordChanged = async (req, res) => {
    try {
      const { id } = req.params;
      let { currentPassword, newPassword, activity, activityDate } = req.body;
      const user = await userModel.findById(id);
      if (!user) {
        throw Error("User not found!!!");
      }
  
      const isPasswordMatch = await bcrypt.compare(
        currentPassword,
        user.password
      );
  
      if (!isPasswordMatch) {
        throw Error("Password is incorrect");
      }
  
      let updateActivity = await userModel.findByIdAndUpdate(id, {
        $push: {
          activity: { activityName: activity, activityDate: activityDate },
        },
      });
  
      const newHashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = newHashedPassword;
      const passwordUpdate = await user.save();
  
      res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
      });
    }
  };
// bunlar email birde asagisindaki parolu deyismekdi


