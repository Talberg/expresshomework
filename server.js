var express = require('express');
var fs = require('fs')
// var data = require('./db/db.json')
var app = express()
var PORT = process.env.PORT || 8080 ;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// require('./public/assets/js/index')
const data = require('./db/db')
require('./public/assets/js/apiRoutes')(app)
require('./public/assets/js/htmlRoutes')(app)


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    console.log(data)
    
  });
