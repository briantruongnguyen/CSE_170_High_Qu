var data = require("../data.json");
var trails = require("../trails.json")

exports.addNewTrail = function(req, res) { 
	// Your code goes here
	var trailname=req.query.trailname;
	var difficulty=req.query.difficulty;
	var description=req.query.description;
	var imageURL=req.query.imageURL;
    var trail_id = req.query.trail_id;
    
    var list_of_trails = trails.trails;
    console.log(trails.trails);
    var the_trail_to_add;
    for(var i = 0; i < list_of_trails.length; i++)
    {
        console.log(list_of_trails[i].trailId + " , " +  trail_id);
        console.log("Trail match! " + list_of_trails[i].trailId == trail_id);
        if(list_of_trails[i].trailId == trail_id)
        {
            the_trail_to_add = list_of_trails[i].trailData;
            console.log(the_trail_to_add);
            break;
        }
    }
    
    
	var newTrail={
		"id": trail_id,
		"name": trailname,
		"difficulty":difficulty,
		"description": description,
		"imageURL":"http://lorempixel.com/400/400/people",
        "trail": the_trail_to_add
	};
	console.log(newTrail);
	data.createdTrails.push(newTrail);
	res.redirect('/');
}