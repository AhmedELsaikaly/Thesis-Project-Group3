const {
    CustomerModel,
  OwnerModel,
  FacilityModel,
  ServicesModel,
  ReservationModel,
  RFModel,
  } = require("./models.js");


////////////Return Facilitys //////////
exports.Facility = function (req, res) { 
    FacilityModel.findById(req.params.id)
    .then(facility=>{
        if(!facility){return res.status(404).end();}
        return res.status.send(facility)
    })
    .catch(err =>next(err));
    
}

////////////Return Reserv customer //////////
exports.ReservationCustomer = function (req, res) { 
    ReservationModel.findById(req.params.id)
    .then(reserv=>{
        if(!reserv){return res.status(404).end();}
        return res.status.send(reserv)
    })
    .catch(err =>next(err));
    
}
 /////// Return Reserv owner ///////////////

//  exports.Customer = function (req, res) { 
//     CustomerModel.findById(req.params.id)
//     .then(customer=>{
//         if(!customer){return res.status(404).end();}
//         return res.status.send(customer)
//     })
//     .catch(err =>next(err));
    
// }