const router = require("express").Router();
const bcrypt = require("bcrypt")
const db = require("../models");
const passport = require('../config/passportConfig')



// file path /auth/

router.route("/")

// file path /auth/login

router
    .route("/login")
    .post(passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth/login',
        failureFlash: true
    })
    );

// file path /auth/logout

router.route("/logout", (req, res) => {
    res.send("You just signed out")
});

// file path /auth/logout
router
    .route("/register")
    // inside post, we need an async function to wait for the hashing of password
    .post(async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                uid: hashedPassword,
            })
            res.redirect("/login")
            console.log(req.body)
        } catch {
            res.redirect("/auth/register")

        }
    });




module.exports = router;