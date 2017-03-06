/** Gets the Add Trail Page */

var data = require("../data.json")
var history = require("../history.json"); // for saving into the history json 


var name ;
var difficulty;
var description ;
var trail ;

var trailToHike;
exports.view = function(req, res){
  trailToHike = req.params.trail_id;
  console.log(trailToHike);
  res.render('hikeTrail');
};

exports.loadTrail = function(req, res){
        
   var list_of_trails = data.createdTrails;
   var the_trail;
   for(var i = 0; i < list_of_trails.length; i++)
   {
        var the_trail = list_of_trails[i];
        name = the_trail.name;
        difficulty = the_trail.difficulty; 
        description = the_trail.description; 
        trail = the_trail.trail;
       
        if(the_trail.id == trailToHike){
            the_trail  = trail;
            break;
        }
   }
   console.log(the_trail);
   res.json({"the_trail":the_trail, "trail_id":trailToHike});
};



/*
    This method will get the information about the trail and save it 
    into the hike history json file 
*/
exports.saveIntoHistory = function ( req, res ){
  // push the information into the history. 

  // Take in the param ID
  var id = req.params.trail_id;
  for(var i = 0; i < 500; i++) {
    console.log ("THE TRAIL ID IS: " + id);
  }
  // Match with for loop 
  // Push to history JSON


}






