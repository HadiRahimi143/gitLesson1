

var express = require('express');
var router = express.Router();
var registerModel = require('../model/register');

/* GET home page. */
router.get('/', function(req, res, next) {

      //database loop form and shown in VIEW ! 

      registerModel.find(function(err, response){
        res.render('register' , {teachers: response})
      });

});
 

// register router (send data to mongoDB)
router.post('/newRegister', function(req,res,next){

   let newRegisterOne = new registerModel({

    ID:req.body.ID,
    Name: req.body.Name,
    Surname: req.body.Surname

  });

  newRegisterOne.save(()=>{
    res.redirect('./')
  });

});


// delete database documents


module.exports = router;

