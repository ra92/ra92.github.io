var express          = require("express"),
    User             = require("../models/user"),
    passport         = require("passport"),
    nodemailer       = require("nodemailer"),
    validator        = require("email-validator"),
    middleware       = require("../middleware/index"),
    router           = express.Router();

router.get("/", function(req,res){
    res.render("index");
});

router.get("/portfolio", function(req,res){
    res.render("portfolio2");
});

router.get("/about", function(req,res){
    res.render("about");
});

router.get("/resources", function(req,res){
    res.render("resources");
});

router.get("/login", function(req,res){
    res.render("login");
});

//HANDLE LOGIN
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/blog",
        failureRedirect: "/login",
        failureFlash: true
    }), function(req, res) {
});

//LOGOUT ROUTE
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("back");
});

//Show SIGNUP PAGE (Only a previous user can create an account for a new user)//LOCKED
router.get("/register", function(req,res){
    res.render("register");
});

//HANDLE SIGNUP (Only a previous user can create an account for a new user)//LOCKED
router.post("/register", function(req, res) {
    var newUser = User({username: req.body.username, email: req.body.email});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("back");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome " + user.username + "!");
            res.redirect("/");
        });
    });
});

router.post('/contact', function( req, res){
    //checks email
    var email_check = validator.validate(req.body.email);
    //Honey pot bot catcher
    if(req.body.company){
      req.flash("error", "Bot Detected");
      res.redirect("/");
    }else if(!req.body.name || !req.body.email || !req.body.message){
      req.flash("error", "Empty Fields");
      res.redirect("/");
    }else if( email_check == false ){
      req.flash("error", "Invalid Email");
      res.redirect("/");
    }else{
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          host: 'smtp.mail.me.com',
          port: 587,
          secure: false, // secure:true for port 465, secure:false for port 587
          auth: {
              user: process.env.MY_EMAIL,
              pass: process.env.MY_EMAIL_KEY
          }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: process.env.MY_EMAIL,
          to: process.env.MY_EMAIL, // list of receivers
          subject: 'Portfolio Contact: ' + req.body.name, // Subject line
          text: req.body.message + ' Email: ' + req.body.email + ' | Name: ' + req.body.name // plain text body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }else{
            req.flash("success", "Thanks for reaching out, I'll get back to you ASAP!");
            res.redirect('/');
          }
      });
    }

});

module.exports = router;
