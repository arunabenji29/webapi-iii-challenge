const express = require('express');

const Posts = require('./postDb.js')

const router = express.Router();

router.get('/', (req, res) => {
    try{
        Posts
        .get(req.body)
        .then(posts => {
            res.status(200).json(posts);
        })
    }
    catch(error){
        res.status(500).json({error:'The users could not be retrieved'})
    }

});

router.post('/',validatePost, async (req, res) => {
    try{
        console.log(req.body)
        const post = await Posts.insert(req.body);
        res.status(200).json(post);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: 'error adding user'})
    }
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware
function validatePost(req, res, next) {
    if(req.body && req.body.text){
        next();
    }
    else{
        res.status(400).json({error:'missing post data'});
    }
};
function validatePostId(req, res, next) {

};

module.exports = router;