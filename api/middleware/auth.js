const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.verifyToken = async (req, res, next) => {
  let token;
  let authorization = req.headers.authorization;
  if (authorization && authorization.split(" ")[0] === "Bearer") {
    token = authorization.split(" ")[1];
  }

  if (!token) {
    console.log("no token in here");
    return next(new ErrorResponse("Not authorized to access here", 401));
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.id);
    if (!user) {
      return next(new ErrorResponse("No user found", 404));
    }
    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access here", 401));
  }
};
