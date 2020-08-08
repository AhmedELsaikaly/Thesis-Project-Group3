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
router.post("/facilitesStore",controller.FacilitesStore);
// Services in place
router.post("/servicesStore",controller.ServicesStore);
router.get("/reservationFacility/:ownerId", controller.GetFacilites);

//Reservation Customer
router.post("/reservationStore",controller.ReservationStore);
router.get("/reservationCustomer/:customerId", controller.GetReservation);
//Updata Customer
router.get("/showbeforupdata/:id",controller.ShowLastDataCustomer);
router.put("/updataCustomer/:id", controller.UpdateCustomer);
//Updata Owner
router.get("/showLastDataOwner/:id",controller.ShowLastDataOwner);
router.put("/updateOwner/:id", controller.UpdateOwner);




module.exports = router;
