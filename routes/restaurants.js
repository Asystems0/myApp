const express = require('express');
const { model, Model } = require('mongoose');
const router = express.Router();
const restaurants = require('../models/restaurants_schema')

router.get('/', (req, res) => {
    res.send('Resaurants!');
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const restaurant = new restaurants({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: req.body.password    
    });

    try{
        const savedRestaurant = await restaurant.save();
        res.json(savedRestaurant);
    }catch(err){
        res.json({ message: err })
    }
});

module.exports = router;