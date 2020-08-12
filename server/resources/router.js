//require technologies

const router = require('express').Router();
const controller = require('./controller');
// const controllerUserRservation = require("./controllerUserRservation")
// login Router
router.post('/loginOwner', controller.SignInOwner);
// signUp Router For Owner
router.post('/signUpOwner', controller.SignUpOwner);
// Login Router for customer
router.post('/loginCustomer', controller.SignInCustomer);
// signUp Router
router.post('/signUpCustomer', controller.SignUpCustomer);
// Service Router
router.post('/services', controller.ServicesStore);
/// Facilites Router
router.post('/Facilites', controller.FacilitesStore);
// Get Services
router.get('/services/:id', controller.GetServices);
// Get Facilits By id
router.get('/Facilites/:id', controller.GetFacilites);
// get all resorts
router.get('/AllOwner', controller.GetAllOwner);
// get specific owner
router.get('/Owner/:id', controller.GetOwner);
// get specific user
router.get('/User/:id', controller.GetUser);
// Add Comment
router.post('/comment', controller.AddComment);
// Get All Comments
router.get('/AllComents/:id', controller.GetComments);
/////////////////////////////////////
//////      RESERVATION     ////////
///////////////////////////////////
///bookings Owner
router.get('/OwnerBookings/:id', controller.OwnerBookings);
//Reservation Customer
router.get('/reservationCustomer/:id', controller.GetReservation);
//Update Customer
router.get('/showbeforupdata/:id', controller.ShowLastDataCustomer);
router.put('/updataCustomer/:id', controller.UpdateCustomer);
//Update Owner
router.put('/updateOwner/:id', controller.UpdateOwner);

//Update Facility
router.get('/showLastDataFacility/:id', controller.ShowLastDataFacility);
router.put('/updateFacility/:id', controller.UpdateFacility);

//Update Servesis
router.get('/showLastDataServesis/:id', controller.ShowLastDataServices);
router.put('/updateServesis/:id', controller.UpdateServices);

<<<<<<< HEAD
router.post('/addReservation', controller.addReservation);
router.get('/getResByDateOwner', controller.getResByDateOwner);
=======
router.post("/addReservation", controller.addReservation);
router.post("/pay", controller.pay);
router.get("/getResByDateOwner", controller.getResByDateOwner);
>>>>>>> 0d7e1eadddedbd9032485d3dfa52eb035774fe26

router.post('/form', controller.ContactUs);

//filter for places
router.get("/filterOwner/:method/:id", controller.filterOwner);

module.exports = router;
