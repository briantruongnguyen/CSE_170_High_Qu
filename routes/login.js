
/*
 * GET help page.
 */

exports.view = function(req, res){
  res.render('login' , {"logged":loggedOut});
};

exports.logout = function(req, res){
    console.log(loggedOut)
    loggedOut = true;
    
    res.render('login' , {"logged":loggedOut});
}