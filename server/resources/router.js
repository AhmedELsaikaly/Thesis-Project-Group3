//require technologies
const router = require("express").Router();
const controller = require("./controller");
// const controllerUserRservation = require("./controllerUserRservation")
// login Router
router.post("/loginOwner", controller.SignInOwner);
// signUp Router For Owner
router.post("/signUpOwner", controller.SignUpOwner);
// Login Router for customer
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
// get specific owner
router.get("/Owner/:id", controller.GetOwner);
// get specific user
router.get("/User/:id", controller.GetUser);
// Add Comment
router.post("/comment", controller.AddComment);
// // Get All Comments
router.get("/AllComents/:id", controller.GetComments);
/////////////////////////////////////
//////      RESERVATION     ////////
///////////////////////////////////
// InfoPlace
router.post("/facilitesStore", controller.FacilitesStore);
// Services in place
router.post("/servicesStore", controller.ServicesStore);

router.post("/servicesStore", controller.ServicesStore);

router.get("/reservationFacility/:ownerId", controller.GetFacilites);

//Reservation Customer
router.post("/reservationStore", controller.ReservationStore);
router.get("/reservationCustomer/:customerId", controller.GetReservation);

// Facility
// ReservationCustomer
// Customer

//export router
module.exports = router;
