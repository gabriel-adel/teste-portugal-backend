const Events = require('../models/events.js');
module.exports = app =>{
    app.get('/event/events',(req,resp)=>{
        Events.events(req,resp);
    })
    app.get('/event/events/:id',(req,resp)=>{
        Events.expecificEvents(req,resp);
    })
}