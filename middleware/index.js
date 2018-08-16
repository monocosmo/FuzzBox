var Campground = require("../models/campground");
var Comment = require("../models/comment");

// All the middleware goes here
var middlewareObj = {};

// Authentication
middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Login First.");
    res.redirect("/login");
};

// Authorization
middlewareObj.checkOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", "Content not found.");
                res.redirect("back");
            }else{
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "You don't have permission to do that.");
                    res.redirect("back");
                }
            }
        });
    }else{
        req.flash("error", "Please login first.");
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                req.flash("error", "Content not found.");
                res.redirect("back");
            }else{
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "You don't have permission to do that.");
                    res.redirect("back");
                }
            }
        });
    }else{
        req.flash("error", "Please login first.");
        res.redirect("back");
    }
}

module.exports = middlewareObj;