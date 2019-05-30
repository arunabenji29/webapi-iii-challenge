const express = require('express');

const Users = require('./userDb.js')

const router = express.Router();



router.post('/', validateUser, async (req, res) => {
    try{
        console.log(req.body)
        const user = await Users.insert(req.body);
        res.status(200).json(user);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: 'error adding user'})
    }
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', async (req, res) => {
    try{
        Users
        .get(req.body)
        .then(users => {
            res.status(200).json(users);
        })
    }
    catch(error){
        res.status(500).json({error:'The users could not be retrieved'})
    }


});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', validateUserId, async (req, res) => {
    try{
        console.log(req.params.id)
        console.log(req.body)
        const user = await Users.update(req.params.id,req.body)
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({message:'the user could not be updated'})
    }
});

//custom middleware

function validateUserId(req, res, next) {
    Users.getById(req.params.id)
    .then(user => {
        if(user)
        {
            req.user = user
            next()
        }
        else{
            res.status(400).json({message:'invalid user id'})
        }
    })
    .catch(error => {
        res.status(500).json({message:'not able to retrieve data'})
    })

};

function validateUser(req, res, next) {
    if(req.body && req.body.name){
        next();
    }
    else{
        res.status(400).json({error:'Please provide the name of the user'});
    }
};

function validatePost(req, res, next) {

};

module.exports = router;
