const express = require('express');
const app = express();
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('../models/Business');

// Defined store route
 businessRoutes.route('/add').post(function (req, res) {
    let business = new Business(req.body);
    business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    }).catch(err => {
    res.status(400).send(err);
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Business.find(function (err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.movie_name = req.body.movie_name;        
        business.movie_yor = req.body.movie_yor;        
        business.movie_plot = req.body.movie_plot;        
        business.producer_name = req.body.producer_name;
        business.producer_sex = req.body.producer_sex;
        business.producer_dob = req.body.producer_dob;        
        business.producer_bio = req.body.producer_bio;                
        business.director_name = req.body.director_name;        
        business.director_sex = req.body.director_sex;        
        business.director_dob = req.body.director_dob;        
        business.director_bio = req.body.director_bio;
        business.actor1_name = req.body.actor1_name;
        business.actor1_sex = req.body.actor1_sex;
        business.actor1_dob = req.body.actor1_dob;
        business.actor1_bio = req.body.actor1_bio;
        business.actor2_name = req.body.actor2_name;
        business.actor2_sex = req.body.actor2_sex;
        business.actor2_dob = req.body.actor2_dob;
        business.actor2_bio = req.body.actor2_bio;
        business.actor3_name = req.body.actor3_name;
        business.actor3_sex = req.body.actor3_sex;
        business.actor3_dob = req.body.actor3_dob;
        business.actor3_bio = req.body.actor3_bio;
        business.actor4_name = req.body.actor4_name;
        business.actor4_sex = req.body.actor4_sex;
        business.actor4_dob = req.body.actor4_dob;
        business.actor4_bio = req.body.actor4_bio;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;