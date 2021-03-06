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

const userFunctions = require("./controllers/users");

app.post('/api', userFunctions.addUser);

app.get('/api', userFunctions.getUsers);

app.get('/api2', (req, res) => {
    res.send("Hello word!");
});

// Connect to DB (not collection!)
mongoose.connect(process.env.MONGO_CONNECTION, 
                { useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true},
                () => console.log("Connect to DB!")
);

//LISTENING RO THE SERVER
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));