const router = require("express").Router();
const controller = require("./controller");
// login Router
router.post("/loginOwner", controller.SignInOwner);
// signUp Router
router.post("/signUpOwner", controller.SignUpOwner);

router.post("/loginCustomer", controller.SignInCustomer);
// signUp Router
router.post("/signUpCustomer", controller.SignUpCustomer);
module.exports = router;
