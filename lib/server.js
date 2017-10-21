import express from 'express';
import config from './config';

// create express server
const app = express();

// middleware to serve the public directory where all React will sit
app.use(express.static('public'));

// We are using the View Engine ejs (look at package.json ejs). 
// Hence index.ejs sits in ~/views which is configured in Controller below.
app.set('view engine', 'ejs');

// Controller Method (home end-point).
// Render the index.ejs when home directory is hit.
// Pass it some varibables
app.get('/', (req, res) => {
  res.render('index', { answer: 42 });
});

// configure a port (rather than hardcoding, add a config file with port coded in there)
app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});
