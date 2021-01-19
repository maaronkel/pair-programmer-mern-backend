const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: "cookieSessions"
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14
        }
    })
)

app.use(cors({
    origin: process.env.CORS_URL,
    credentials: true
}));

const passport = require("./middleware/passport");
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/userProfiles');
// import userRoutes from './routes/users.js';
// import workspaceRoutes from './routes/workspaces.js';

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
// app.use('/dashboard', dashboardRoutes);
// app.use('/workspaces', workspaceRoutes);
app.use('/', (req, res) => res.send('Homepage'));

// connecting to mongoose cloud atlas 
const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.yd6ia.mongodb.net/pairprogrammer?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Connected to MongoDB and Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

module.exports = app;