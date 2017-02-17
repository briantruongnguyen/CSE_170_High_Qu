/** Gets the Add Trail Page */
trailId = 1;
var trails = require("../trails.json")

exports.view = function(req, res){
  res.render('addTrail');
};

exports.addTrailToJSON = function(req, res){
    console.log(req.body.trailData)
    var trail={
        trailId: trailId,
        trailData: req.body.trailData
	};
    
    trails.trails.push(trail);
    console.log(trail);
    res.json({trailId: trailId++});
};






