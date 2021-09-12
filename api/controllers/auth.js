const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

/* Register block */
exports.register = async (req, res, next) => {
  // res.send("Register Route");
  const { username, email, password } = req.body;
  // console.log(req.body);

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/* Login block */
exports.login = async (req, res, next) => {
  // res.send("Login Route");
  const { email, password } = req.body;

  if (!email && !password) {
    // res.status(400).json({
    //   success: false,
    //   error: "Please provide and email or password",
    // });
    return next(new ErrorResponse("Missing email and password", 401));
  }

  if (!password) {
    return next(new ErrorResponse("Missing password"));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      // res.status(404).json({
      //   success: false,
      //   error: "Invalid credentials",
      // });
      return next(new ErrorResponse("Invalid Credentials", 401));
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      // res.status(404).json({
      //   success: false,
      //   error: "Invalid crededentials",
      // });
      return next(new ErrorResponse("Invalid Credentials", 404));
    }
    res.status(200).json({
      success: true,
      token: "tr3444433",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/* ForgotPassword Block*/
exports.forgotPassword = (req, res, next) => {
  res.send("Forgot Password Route");
};

/* ResetPassword Block*/
exports.resetPassword = (req, res, next) => {
  res.send("Reset Password Route");
};
