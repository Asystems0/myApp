const express = require('express');
const { model, Model } = require('mongoose');
const router = express.Router();
const Restaurants = require('../models/restaurants_schema')

router.get('/', async (req, res) => {
    try{
        const restaurants = await Restaurants.find();
        res.json(restaurants);
    }catch(err){
        res.json({message: err})
    }
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