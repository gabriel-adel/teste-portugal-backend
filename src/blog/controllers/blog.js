const blog = require('../models/blog');

module.exports = app => {
    
    app.get('/blog/get-posts', (req, resp) => {
        blog.getPosts(req,resp)
    });
    app.get('/blog/get-one-posts/:id', (req, resp) => {
        blog.getOnePosts(req,resp)
    });
    app.get('/blog/get-tags', (req, resp) => {
        blog.getTags(req,resp)
    });
    app.get('/blog/get-category', (req, resp) => {
        blog.getcategory(req,resp)
    }); 

    app.post('/blog/share-post', (req, resp) => {
        blog.sharePost(req,resp)
    }); 
    
    //get by tag
    app.get('/blog/get-post-by-tag/:tag', (req, resp) => {
        blog.getPostByTag(req,resp)
    });
    app.get('/blog/get-post-by-category/:categoria', (req, resp) => {
        blog.getPostByCategory(req,resp)
    });
    
};