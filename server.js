const express = require('express')
const app = express()
const { db } = require('./db/index')
const organization = require('./routes/organization.router')
const bodyParser = require('body-parser')

const PORT = 3000

//opening DB connection
db()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json({}))
app.use(organization)

app.get('/', (req,res) => {
res.send("Hello World from express")
    
})






app.listen(PORT, ()=>{console.log(`This app is listening in Port `+ PORT)})