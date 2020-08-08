//require technologies
const router = require("express").Router();
const controller = require("./controller");
const controllerReserfation = require("./controllerReservation");
const controllerUserRservation = require("./controllerUserRservation")
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
router.get("/reservationPlace/:id", controllerReserfation.InfoPlace);
// Services in place
router.get("/reservationServer/:id", controllerReserfation.Services);
// Facilitiys
router.get("/reservationFacility/:id", controllerUserRservation.Facility);
//Reservation Customer
router.get("/reservationCustomer/:id", controllerUserRservation.ReservationCustomer);



// Facility
// ReservationCustomer
// Customer


//export router
module.exports = router;
