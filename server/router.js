/**
 * Created by Christianson on 6/4/2016.
 */
const Authentication = require('./controllers/authentication');

module.exports =  function(app){
    app.post('/signup', Authentication.signup);
};