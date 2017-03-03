
/*
 * GET home page.
 */
var profile = require("../profile.json");


console.log("I got here")

exports.viewA = function(req, res){
  console.log(profile);
    profile['showDefault'] = true;
    // A/B testing
    
    
  res.render('index',profile);
};

exports.viewB = function(req, res){
  console.log(profile);
    profile['showDefault'] = false;
    // A/B testing
    
    
  res.render('index',profile);
};


// hello?
