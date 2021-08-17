const con = require('../config/con');
class Peoples { 
    people(req,resp){
       
        con.query('select * from people',(err,result)=>{
            err?resp.status(401).json({"result":"deu ruim"}):resp.status(201).json(result); 
            
        });
    }
    
}
module.exports = new Peoples;