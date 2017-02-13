var data = require("../data.json");

exports.addNewTrail = function(req, res) {    
	// Your code goes here
	var trailname=req.query.trailname;
	var difficulty=req.query.difficulty;
	var description=req.query.description;
	var imageURL=req.query.imageURL;
	var newTrail={
		"id":"1",
		"name": trailname,
		"difficulty":difficulty,
		"description": description,
		"imageURL":"http://lorempixel.com/400/400/people",
	};
	console.log(newTrail);
	data.createdTrails.push(newTrail);
	res.render('index');
 }