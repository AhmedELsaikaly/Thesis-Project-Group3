const {
    OwnerModel,
    FacilityModel,
    ServicesModel,
  } = require("./models.js");

  //////// Return Information places from Owner model ////////////
  exports.InfoPlace = function (req, res) { 
      OwnerModel.findById(req.params.id)
      .then(owner=>{
          if(!owner){return res.status(404).end();}
          return res.status.send(owner)
      })
      .catch(err =>next(err));
      
  }


  ////////////Return Service if ckecked //////////
  exports.Services = function (req, res) { 
    ServicesModel.findById(req.params.id)
    .then(service=>{
        if(!service){return res.status(404).end();}
        return res.status.send(service)
    })
    .catch(err =>next(err));
    
}
////////////Return Facilitys //////////
exports.Facility = function (req, res) { 
    FacilityModel.findById(req.params.id)
    .then(facility=>{
        if(!facility){return res.status(404).end();}
        return res.status.send(facility)
    })
    .catch(err =>next(err));
    
}
