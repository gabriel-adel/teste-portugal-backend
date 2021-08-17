const con = require('../config/con');
class Events { 
    events(req,resp){
       
        con.query('select * from events',(err,result)=>{
            err?resp.status(401).json({"result":"deu ruim"}):resp.status(201).json(result); 
        });
    }
    expecificEvents(req,resp){
        let idEvent = req.params.id;
        con.query('select *, DATE_FORMAT(dateEvent,"%d-%m-%y") as dateEvent from events where id=?',[idEvent],(err,result)=>{
            err?resp.status(401).json({"result":"deu ruim"}):resp.status(201).json(result); 
        })
    }
}
module.exports = new Events;