const Users = require('../models/users_schema');

module.exports.getUsers = async (req, res) => {
    try{
        const users = await Users.find();
        return res.json(users);
    }catch(err){
        res.json({ message: err });
    }
};



var valid = true;
function checkIfUserInputIsBlank(input){
    if (input === ''){
        valid = false;
    }
}

module.exports.addUser = async (req, res) => {
    console.log(req.body);

    checkIfUserInputIsBlank(req.body.id);
    checkIfUserInputIsBlank(req.body.firstName);
    checkIfUserInputIsBlank(req.body.lastName);
    checkIfUserInputIsBlank(req.body.email);
    checkIfUserInputIsBlank(req.body.phoneNumber);
    checkIfUserInputIsBlank(req.body.password);
    checkIfUserInputIsBlank(req.body.credit);
    // checkIfUserInputIsBlank(req.body.age);

    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    const age = getAge(req.body.birthday);

    if(age < 18){
        valid = false;
        console.log("Under");
        res.status(400).send(JSON.stringify('age under 18'));
        // errors.age = "age under 18";
        // res.status(404).json({ errors });
        return;
    }

    console.log("Valid: ", valid);

    if (valid === true){

        const user = new Users({
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
            credit: req.body.credit,
            birthday: req.body.birthday,
            age: age
        });

        console.log("I got a request!");

        try{
            const savedUser = await user.save();
            res.status(200).send(JSON.stringify(`welcome, ${user.firstName}`));
            res.json(savedUser);
            console.log("Added new user to DB");
            return;

        }catch(err){
            res.status(404).json(Object.keys(err.keyPattern)[0]);
            // res.status(404).json({message: err.keyPattern});
            console.log(Object.keys(err.keyPattern)[0]);
            // console.log(err.keyPattern);
            // res.json({message: err});
            // console.log(err);
            // console.log(Object.keys(err[keyValue]));
        }
        
    } else {
        valid = true;
        
        // errors.conection = "Mis";
        // res.status(404).json({ errors });
        // return;
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