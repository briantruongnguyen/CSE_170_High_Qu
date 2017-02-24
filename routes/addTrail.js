/** Gets the Add Trail Page */
trailId = 1;
var trails = require("../trails.json")
var annotations = require("../annotation.json")

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

exports.addAnnotation = function(req,res){
    console.log(req.body.annotation + "    " + req.body.lat + "    " +  req.body.lng);
    var annotation = {
        annotation: req.body.annotation,
        lat: req.body.position.lat,
        lng: req.body.position.lng
    }
    annotations.annotations.push(annotation);
    console.log(annotations);
}

exports.getAnnotations = function(req,res){
    console.log(annotations.annotations);
    res.json(annotations.annotations);
}




