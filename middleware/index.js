var profile = require("../models/user");

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to sign in to do that!");
    res.redirect("back");
};

module.exports = middlewareObj;
