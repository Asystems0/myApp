const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const PORT = 8080;

//ROUTES
// const routerFunc = (router, filePath) => {
//     app.use(router, require(filePath));
// }

// routerFunc('/users', './routes/users');
// routerFunc('/restaurants', './routes/restaurants');

app.use(express.json());

const userRoute = require('./routes/users');
app.use('/users', userRoute);

const restaurantRoute = require('./routes/restaurants');
app.use('/restaurants', restaurantRoute);

app.get('/', (req, res) => {
    res.send("HOME PAGE.");
});

// Connect to DB (not collection!)
mongoose.connect(process.env.MONGO_CONNECTION, 
                { useNewUrlParser: true },
                () => console.log("Connect to DB!")
);

//LISTENING RO THE SERVER
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));