const express = require('express');
const router = express.Router();
const Users = require('../models/users_schema');

// GET ALL USERS 
router.get('/', async (req, res) => {
    try{
        const users = await Users.find();
        res.json(users);
    }catch(err){
        res.json({ message: err });
    }
});

// SUBMIT A NEW USER
router.post('/', async (req, res) => {
    console.log(req.body);
    const user = new Users({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        credit: req.body.credit,
        birthday: req.body.birthday,
        age: req.body.age

    });

    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message: err});
    }
    
});

//SPECIFIC USER
router.get('/:userID', async (req, res) => {
    console.log(req.params.userID);
    try{
        const user = await Users.findById(req.params.userID);
        res.json(user);
    }catch(err){
        res.json({ message: err });
    }
});

// DELETE USER
router.delete('/:userID', async (req, res) => {
    try{
        const removeUser = await Users.remove({ _id: req.params.userID});
        res.json(removeUser);
    }catch(err){
        res.json({ message: err })
    }
});

// UPDATE USER
router.patch('/:userID', async (req, res) => {
    try{
        const updateduser = await Users.updateOne(
            {_id: req.params.userID },
            { $set: {credit: req.body.credit} }
        );
        res.json(updateduser);    
    }catch(err){
        console.log(err);
        res.json({ message: err })
    }
});


module.exports = router;