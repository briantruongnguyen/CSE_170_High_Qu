
/*
 * GET favs page.
 */
var data = require('../favorites.json');
exports.view = function(req, res){
  res.render('favs',data);
};