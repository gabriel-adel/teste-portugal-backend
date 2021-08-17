const People = require('../models/peoples.js');
module.exports = app =>{
    app.get('/team/peoples',(req,resp)=>{
        People.people(req,resp);
    })
    
}