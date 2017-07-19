#!/usr/bin/env node
var express           = require("express"),
    bodyParser        = require("body-parser"),
    passport          = require("passport"),
    LocalStrategy     = require("passport-local"),
    mongoose          = require("mongoose"),
    cookieParser      = require('cookie-parser'),
    cookieSession     = require('cookie-session'),
    flash             = require('express-flash'),
    methodOverride    = require("method-override"),
    expressSanitizer  = require("express-sanitizer"),
    User              = require("./models/user");

var app = express();

mongoose.connect(DATABASE);

var indexRoutes   = require("./routes/index"),
    blogRoutes    = require("./routes/blog");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash(app));
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(expressSanitizer());

app.use(require("cookie-session")({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    res.locals.currentUser = req.user;
    next();
});

app.use(indexRoutes);
app.use("/blog",blogRoutes);

app.listen(8080, process.env.IP, function() {
    console.log("App Started.");
});
