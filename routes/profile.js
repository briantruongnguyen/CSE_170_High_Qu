
/*
 * GET profile page.
 */


 var profile = require("../profile.json");



 exports.view = function(req, res){
  res.render('profile',profile);


//  var nameField = $(".container");
  // Change the fields to display the JSON information.
  

  //console.log (nameField)

  // When the user presses the fields, it should open up the ability to change
  // the information within the fields. 


};