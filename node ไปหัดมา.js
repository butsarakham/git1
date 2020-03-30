var express = require('express')
var server = express()
var ejs = require('ejs')

server.engine('html', ejs.renderFile)
server.listen(3000)

var data = [ { name: 'Bang Yai', area : 80.0 },
             { name: 'Rang Sit', area : 90.0 },
             { name: 'Bang Na' , area : 70.0} ]

server.get('/branch',showBranch)
server.get('/service/branch', listBranch)

function showBranch(req,res) {
    var model = { }
    model.data = data
    res.render('branch.html',model)
}

function listBranch(req,res) {
    res.send(data)
}

//npm install express
//node main.js
//open browser to localhost:2000/check