/**
 * Created by Christianson on 6/4/2016.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

userSchema.pre('save', function(next){
    //get access to the user model
    const user = this;

    bcrypt.genSalt(10,function(err, salt, hash){
        if(err){return next(err);}
        
        user.password = hash;
        next();
    })
});

//Create the model class
const ModelClass = mongoose.model('user', userSchema);

//Export the model
module.exports = ModelClass;
