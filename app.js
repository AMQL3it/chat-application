// External import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require('./routers/loginRouter');
const usersRouter = require('./routers/usersRouter');
const inboxRouter = require('./routers/inboxRouter');
// Internal import
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler');

// Application starting point
const app = express();
dotenv.config();

// Database connection
mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.DB_CONNECTION, {})
    .then(() => console.log("database connection successfull!"))
    .catch(err => console.log(err));

// request persers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine","ejs");

// set static folder
app.use(express.static(path.join(__dirname,"public")));

// parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// 404 not found error handler
app.use(notFoundHandler);

// Common error handler
app.use(errorHandler);


app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`);
});