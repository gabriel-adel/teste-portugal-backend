const Galerry = require('../models/gallery.js');
module.exports = app =>{
    app.get('/gallery/images',(req,resp)=>{
        Galerry.gellery(req,resp);
    })
    
}