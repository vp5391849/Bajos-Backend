const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
const app = express()
 mongoose.connect(require('./token.json').Mongo)
.then(()=> console.log('mongoose connected'))

app.use(express.json())


app.use(() => (req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "http://localhost:5000/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


fs.readdir('api', (err, folders)=>{
if (err) return err;

for (const folder of folders){
    fs.readdir('api/'+ folder, (e ,files)=>{
        if(e) return e;


        for (const file of files){
            let endpoint = require(path.resolve('./api/' + folder + "/" + file))
            app[endpoint.method]('/api/'+ folder + "/" + endpoint.name, (req,res)=> endpoint.run(req,res))
           console.log('/api/' + folder + "/" + endpoint.name) 
        //    console.log('final')
        }
    })
}

})





app.listen(5000, ()=>{
    console.log('server started')
})