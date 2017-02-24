var profile = require("../profile.json");

exports.addNewProfile = function(req, res) {
	// Your code goes here
    profile.createdProfiles = []
	var profilename=req.query.p_name;
	var description=req.query.description;
	var imageURL=req.query.imageURL;
    
	var newProfile={
		"id":"1",
		"name": profilename,
		"description": description,
		"imageURL":"https://scontent.xx.fbcdn.net/v/t1.0-9/15622540_1892333944331666_4214696052833980642_n.jpg?oh=a891f43b7a5fe18c90ac0d75220bd4b6&oe=593448BF",
	};
	console.log(profile);
    console.log("This is happening.");
	profile.createdProfiles.push(newProfile);
	loggedOut=false
    res.redirect("/")
}