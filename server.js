require('dotenv').config();
// Regiser Models
require("./models/comedian");

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { AuthService } = require('./services')

const initializeRoutes = require('./routes')

const app = express();
const PORT = process.env.PORT || 8080;

const authService = new AuthService({ app });
authService.initialize()

mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(morgan('dev'));

app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
    })
);

app.use(express.static(path.join(__dirname, '/client/build')));

app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

initializeRoutes(app)

app.listen(PORT, () => console.log(`Server Running On Port *${PORT}`));
