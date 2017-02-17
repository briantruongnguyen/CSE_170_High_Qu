
/*
 * GET submit trail page.
 */
var data = require("../data.json");
 var trails = require("../trails.json");
exports.view = function(req, res){
    
   var list_of_trails = trails.trails;
        console.log(trails.trails);
        var the_trail_to_add;
        for(var i = 0; i < list_of_trails.length; i++)
        {
            console.log(list_of_trails[i].trailId + " , " +  req.params.trail_id);
            console.log("Trail match! " + list_of_trails[i].trailId == req.params.trail_id);
            if(list_of_trails[i].trailId == req.params.trail_id)
            {
                the_trail_to_add = list_of_trails[i].trailData;
                console.log(the_trail_to_add);
                console.log("Found!");
                break;
            }
        }
  res.render('submitTrail',{trail_id: req.params.trail_id, trail_data: the_trail_to_add });
  
};


exports.sendTrails = function(req, res){
    
   var list_of_trails = trails.trails;
        console.log(trails.trails);
        res.json(list_of_trails);
};



exports.sendTrailWithInfo = function(req, res){
    
        var list_of_trails = data.createdTrails;
        console.log(list_of_trails);
        res.json(list_of_trails);
};




