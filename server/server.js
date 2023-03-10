const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

// App Set //
const PORT = process.env.PORT || 5000;

// source in your routes
const starterRouter = require('./routes/starter.router')

/** ----------MIDDLEWARE---------------- */
app.use(bodyParser.json()); // needed for axios request
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('build')); // for static files


/** ----------------EXPRESS ROUTES -------------- */
app.use('/starter', starterRouter);














// START SERVER
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

