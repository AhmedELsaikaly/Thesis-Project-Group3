//require technologies
const router = require("express").Router();
const controller = require("./controller");
// login Router
router.post("/loginOwner", controller.SignInOwner);
// signUp Router
router.post("/signUpOwner", controller.SignUpOwner);
router.post("/loginCustomer", controller.SignInCustomer);
// signUp Router
router.post("/signUpCustomer", controller.SignUpCustomer);
// Service Router
router.post("/services", controller.ServicesStore);
/// Facilites Router
router.post("/Facilites", controller.FacilitesStore);
// Get Services
router.get("/services/:id", controller.GetServices);
// Get Facilits By id
router.get("/Facilites/:id", controller.GetFacilites);
// get all resorts
router.get("/AllOwner", controller.GetAllOwner);
// get specific user
router.get("/User/:id", controller.GetUser);
// get specific owner
router.get("/Owner/:id", controller.GetOwner);
//export router
module.exports = router;
