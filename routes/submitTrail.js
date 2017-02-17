
/*
 * GET submit trail page.
 */
 var data = require("../data.json");
exports.view = function(req, res){
  res.render('submitTrail',{trail_id: req.params.trail_id});
};


