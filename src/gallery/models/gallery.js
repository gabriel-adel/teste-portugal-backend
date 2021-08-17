const con = require('../config/con');
class Galerry { 
    gellery(req,resp){
       
        con.query('select * from image',(err,result)=>{
            err?resp.status(401).json({"result":"deu ruim"}):resp.status(201).json(result); 
            
        });
    }
    
}
module.exports = new Galerry;