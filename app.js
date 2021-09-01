const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const PORT = 8080;

app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

const userRoute = require('./routes/users');
app.use('/users', userRoute);

const restaurantRoute = require('./routes/restaurants');
app.use('/restaurants', restaurantRoute);

// app.post('/api', (req, res) => {
//     // console.log(req.body);
//     console.log("I got a request!");
//     const data = req.body;
//     res.json({test: 123});
// });

const getUsers = require("./controllers/users");
app.get('/api', getUsers.getUsers);

// Connect to DB (not collection!)
mongoose.connect(process.env.MONGO_CONNECTION, 
                { useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true},
                () => console.log("Connect to DB!")
);

//LISTENING RO THE SERVER
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));