
/*
 * GET profile page.
 */
 var profile = require("../profile.json");
exports.view = function(req, res){
  res.render('profile');
};