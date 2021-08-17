const con = require('../config/con');


class Blog{
    getPosts(req,resp){
        con.query('select *,DATE_FORMAT(dataUpdate,"%d-%m-%y") as dataUpdate, DATE_FORMAT(dataPost,"%d-%m-%y") as dataPost from post',(err,result)=>{
            if(err)resp.status(400).json(err);
            resp.status(201).json(result);
        })
    }
    getOnePosts(req,resp){
        let id = req.params.id;
        con.query('select * ,DATE_FORMAT(dataUpdate,"%d-%m-%y") as dataUpdate, DATE_FORMAT(dataPost,"%d-%m-%y") as dataPost from post where id=?',[id],(err,result)=>{
            if(err)resp.status(400).json(err);
            resp.status(201).json(result);
        })
    }
    getTags(req,resp){
        con.query('select * from tag',(err,result)=>{
            if(err)resp.status(400).json(err);
            resp.status(201).json(result);
        })
    }
    getcategory(req,resp){
        con.query('select * from categoria',(err,result)=>{
            if(err)resp.status(400).json(err);
            resp.status(201).json(result);
        })
    }
    getPostByTag(req,resp){
        let tag  = req.params.tag;
        con.query('select * ,DATE_FORMAT(dataUpdate,"%d-%m-%y") as dataUpdate, DATE_FORMAT(dataPost,"%d-%m-%y") as dataPost from post as p inner join tag as t inner join tagPost as tp on p.id = tp.idPost and t.id = tp.idTag where t.id = ?',[tag],(err,result)=>{
            if(err)resp.status(400).json(err);
            resp.status(201).json(result);
        })
    }
    getPostByCategory(req,resp){
        let categoria  = req.params.categoria;
        con.query('select * ,DATE_FORMAT(dataUpdate,"%d-%m-%y") as dataUpdate, DATE_FORMAT(p.dataPost,"%d-%m-%y") as dataPost from post as p inner join categoria as c inner join categoriaPost as cp on p.id=cp.idPost and c.id = cp.idCategoria where c.id=?',[categoria],(err,result)=>{
            if(err)resp.status(400).json(err);
            resp.status(201).json(result);
        })
    }
    
}
module.exports = new Blog;


