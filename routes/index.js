
/*
 * GET home page.
 */
var profile = require("../profile.json");


exports.view = function(req, res){
	console.log(profile);
  res.render('index',profile);
};


