const Users = require('../models/users_schema');

module.exports.getUsers = async (req, res) => {
    try{
        const users = await Users.find();
        return res.json(users);
    }catch(err){
        res.json({ message: err });
    }
};

module.exports.addUser = async (req, res) => {
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
};

module.exports.getUser = async (req, res) => {
    console.log(req.params.userID);
    try{
        const user = await Users.findById(req.params.userID);
        res.json(user);
    }catch(err){
        res.json({ message: err });
    }
};

module.exports.deleteUser = async (req, res) => {
    try{
        const removeUser = await Users.remove({ _id: req.params.userID});
        res.json(removeUser);
    }catch(err){
        res.json({ message: err })
    }
};

module.exports.updateUser = async (req, res) => {
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
};

module.exports.changeUserpassword = async (req, res) => {
    const checkPassword = await Users.findById(req.params.userID).select('password');
    console.log({oldPassword: req.body.oldPassword});

    if(checkPassword["password"] === {oldPassword: req.body.oldPassword}["oldPassword"]){
        try{
            const updateduser = await Users.updateOne(
                {_id: req.params.userID },
                { $set: {password: req.body.password} }
            );
            res.json(updateduser);    
        }catch(err){
            console.log(err);
            res.json({ message: err })
        }
    }else{
        res.send("wrong Password");
    }
};