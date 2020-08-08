//require technologies
const router = require("express").Router();
const controller = require("./controller");
// const controllerUserRservation = require("./controllerUserRservation")
// login Router
router.post("/loginOwner", controller.SignInOwner);
// signUp Router
router.post("/signUpOwner", controller.SignUpOwner);

router.post("/loginCustomer", controller.SignInCustomer);
// signUp Router
router.post("/signUpCustomer", controller.SignUpCustomer);

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
