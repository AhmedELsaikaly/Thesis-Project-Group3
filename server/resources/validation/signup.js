//require technologies
const Validator = require("validator");
const isEmpty = require("is-empty");

//validateLoginInput function
module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions

  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.placeName = !isEmpty(data.placeName) ? data.placeName : "";
  //fullname check
  if (Validator.isEmpty(data.fullName)) {
    errors.fullName = { email: "Full Name field is required" };
  }
  //email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  //place name check
  if (Validator.isEmpty(data.placeName)) {
    errors.placeName = "Place Name field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
