var profile = require("../profile.json");

exports.updateProfile = function(req, res) {
	// Your code goes here
	var profilename=req.query.p_name;
	var description=req.query.description;
	var imageURL=req.query.imageURL;
    
	var newProfile={
		"id":"1",
		"name": profilename,
		"description": description,
		"imageURL":"https://scontent.xx.fbcdn.net/v/t1.0-9/15622540_1892333944331666_4214696052833980642_n.jpg?oh=a891f43b7a5fe18c90ac0d75220bd4b6&oe=593448BF",
	};

	for (var i=0; i<profile.createdProfiles.length; i++) {
  		if (profile.createdProfiles[i].name == profilename) {
    	profile.createdProfiles[i].description= description;
    	break;
  	}
	}

	console.log(profile);
    console.log("This is happening.");
	//profile.createdProfiles.push(newProfile);
	res.render('index');
}