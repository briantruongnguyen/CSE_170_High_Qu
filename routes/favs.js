
/*
 * GET favs page.
 */
var data = require('../favorites.json');
exports.view = function(req, res){
  res.render('favs',data);
};

exports.addFavorite = function(req, res){
    var t_id = req.params.trail_id;
    var t_name = req.params.trail_name;
    var t_desc = req.params.trail_desc;
    var t_diff = req.params.trail_diff;

    var newjson = {
        "id"            : t_id,
        "name"          : t_name,
        "description"   : t_desc,
        "difficulty"    : t_diff
    }

    console.log("In the javascript file.")
    console.log(newjson);
    data.favorites.push(newjson);
}