
/*
 * GET hike history page.
 */
var history = require("../history.json");
exports.view = function(req, res){
 
  res.render('hikehistory', history);

};