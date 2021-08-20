const express = require('express');
const router = express.Router();
const {getUsers, addUser, getUser, deleteUser, updateUser, changeUserpassword} = require('../controllers/users');

// GET ALL USERS 
router.get('/', getUsers);

// SUBMIT A NEW USER
router.post('/', addUser);

//SPECIFIC USER
router.get('/:userID', getUser);

// DELETE USER
router.delete('/:userID', deleteUser);

// UPDATE CREDIT CARDD USER
router.patch('/:userID', updateUser);

//UPDATE USER PASSWORD
router.patch('/changepass/:userID', changeUserpassword);

module.exports = router;
