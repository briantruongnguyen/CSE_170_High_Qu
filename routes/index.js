
/*
 * GET home page.
 */
var profile = require("../profile.json");

profile['showDefault'] = true;
console.log("I got here")
exports.view = function(req, res){
  console.log(profile);
    
    // A/B testing
    
    
  res.render('index',profile);
};

// hello?
