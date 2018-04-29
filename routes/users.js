var express = require('express');
var router = express.Router();
var passport = require('passport');
var async = require('async'); 

var User = require('../models/user');


var Verify    = require('./verify');

/* GET users listing. */
router.get('/',  function(req, res, next) {
  User.find({}, function (err, user) {       
     if (err) throw err;      
       res.json(user);   
     });
  
});



router.post('/register', function(req, res) {
     let newUser = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        username : req.body.username,
        password : req.body.password,
        phone : req.body.phone,
        address : req.body.address,
        height : req.body.height,
        weight: req.body.weight,
        blood_pressure: req.body.blood_pressure,
        admin: req.body.admin
   });

    User.register(new User(newUser),
      req.body.password, function(err, user) {
        if (err) {
            return res.status(500).json({err: err});
        }
        passport.authenticate('local')(req, res, function () {
            return res.status(200).json({status: 'Registration Successful!'});
        });
    });
});



router.post('/login',  function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
        
      var token = Verify.getToken(user);
      return res.status(200).json({
        status: 'Login successful!',
        user:user,
        success: true,
        token: token
      });
    });
  })(req,res,next);
});

router.get('/logout', function(req, res) {
    req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

router.delete('/delete/:id', (req, res, next) => {
   User.remove({_id : req.params.id }, function(err, result){
    if (err) {
      return res.json("Failed to remove User" + err);
    }else{
     return res.json("User removed Successfully");
    }
  });
});


router.put('/edit/:id', (req, res, next) => {
    var query = {_id : req.params.id};

    let newUser = new User({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      username : req.body.username,
      password : req.body.password,
      phone : req.body.phone,
      address : req.body.address,
      height : req.body.height,
      weight: req.body.weight,
      blood_pressure: req.body.blood_pressure,
      admin: req.body.admin
 });

 var userToUpdate = {};
 userToUpdate = Object.assign(userToUpdate, newUser._doc);
 delete userToUpdate._id;

 User.findOneAndUpdate(query, userToUpdate, (err)=>{
  if(err) throw err;
  
  else{
      res.json({success: true, msg:' User updated successfully'});
      
  }
});


});

module.exports = router;