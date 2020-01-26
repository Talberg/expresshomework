const database = require('../../../db/db.json')
var notes = require('../../../db/db.js')
const fs = require('fs')

module.exports = function(app) {

app.get('/api/notes',function(req,res){
    res.json(database)
})

app.post('/api/notes',function(req,res){
 console.log(database)
 database.push(req.body)
 console.log(database)
 let newData = JSON.stringify(database)
fs.writeFileSync('./db/db.json',newData)
 
}
)
app.post('/api/notes/:id', function(req,res){
    var id = req.params.id;
    var newDatebase = database.filter(database => database.id !== id )
    var data = JSON.stringify(newDatebase)
    console.log(newDatebase)
    fs.writeFileSync('./db/db.json',data)
    return res.json(data)
    
})


}