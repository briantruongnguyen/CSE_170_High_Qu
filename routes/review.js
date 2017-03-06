
/*
 * GET help page.
 */
var comments = require("../comments.json");


exports.view = function(req, res){
 var trail_id = req.query.id;
  if(req.params.version == ""){
       res.render('review', 
        {
      "trail_id": trail_id,
      "showDefault": true
        }
            ); 
  }
  else{
        res.render('review', 
        {
      "trail_id": trail_id,
      "showDefault": false
        }
            );
  }

};



exports.saveReview = function(req, res){
  	var difficulty=req.query.difficulty;
	var comment=req.query.comment;
	var imageURL=req.query.imageURL;
    var musicText = req.query.musicText;
    var warningText = req.query.warningText;
    var trail_id = req.query.trail_id;
    
	var newComment={
        "id": trail_id,
        "difficulty": difficulty,
		"comment": comment,
		"imageURL": imageURL,
        "musicText": musicText,
        "warningText": warningText
	};
    console.log(newComment);
	comments.comments.push(newComment);
	res.redirect('/');  
};

exports.getReview = function(req,res){
    var trail_id = req.params.trail_id;
   console.log(trail_id);
   var reviews_to_send = [];
   var list_of_comments = comments.comments;
    console.log(comments);
    console.log(comments.comments);
   for(var i = 0; i < list_of_comments.length; i++)
   {
       var id = list_of_comments[i].id;
        console.log(id);
        if(id == trail_id){
            reviews_to_send.push(list_of_comments[i]);
        }
   }
   console.log(reviews_to_send);
   res.json(reviews_to_send);
}