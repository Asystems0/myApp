const express = require('express');
const router = express.Router();
const users = require('../models/users_schema');

router.get('/', (req, res) => {
    res.send("users!");
});

router.post('/', (req, res) => {
    console.log(req.body);
    const user = new users({
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

    user.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        });
});

module.exports = router;