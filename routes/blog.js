var expressSanitizer = require("express-sanitizer"),
    methodOverride   = require("method-override"),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    express          = require("express"),
    Blog             = require("../models/blog"),
    users            = require("../models/user"),
    middleware       = require("../middleware/index"),
    router           = express.Router();

//App Config
// mongoose.connect("mongodb://localhost:27017/portfolio_blog");

//INDEX ROUTE
router.get("/", function(req,res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }else{
            res.render("blog",{blogs: blogs});
        }
    })
});
//NEW ROUTE
router.get("/new", middleware.isLoggedIn, function(req,res){
    res.render("new");
});

//CREATE ROUTE
router.post("/", middleware.isLoggedIn, function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog,function(err,newBlog){
        if(err){
            console.log(err);
        }else{
            res.redirect("/blog");
        }
    })
});
//SHOW ROUTE
router.get("/:id",function(req, res) {
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            res.redirect("/blog");
            console.log(err);
        }else{
            res.render("post",{blog: foundBlog});
        }
    });
});
//EDIT ROUTE
router.get("/:id/edit", middleware.isLoggedIn, function(req, res) {
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            res.redirect("/blog");
            console.log(err);
        }else{
            res.render("edit",{blog: foundBlog});
        }
    });
});
//UPDATE ROUTE
router.put("/:id", middleware.isLoggedIn, function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedBlog){
        if(err){
            res.redirect("/blog");
        }else{
            res.redirect("/blog/" + req.params.id);
        }
    })
});
//DESTROY ROUTE
router.delete("/:id", middleware.isLoggedIn, function(req,res){
    Blog.findByIdAndRemove(req.params.id,req.body.blog,function(err){
        if(err){
            res.redirect("/blog");
        }else{
            res.redirect("/blog");
        }
    })
});

module.exports = router;
