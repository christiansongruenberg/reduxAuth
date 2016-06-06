/**
 * Created by Christianson on 6/4/2016.
 */
const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {};

//Create JWT stategy
const jwtLogin = new JwtStategy(jwtOptions, function(payload, done){
    
});

//Tell passport to use this stategy