
const express = require('express');

const consign = require('consign')
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.json());
app.use((req,resp,next)=>{
    resp.header("Access-Control-Allow-Origin", "*"); 
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    resp.header("Access-Control-Allow-Headers", "*,Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
})

consign().include('/src/event/controllers').into(app)

module.exports = app