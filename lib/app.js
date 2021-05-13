/* eslint-disable no-console */
// import dependencies
import express from 'express';
import request from 'superagent';
import cors from 'cors';
import morgan from 'morgan';
import { formatCity, formatWeather, formatYelp } from './munge-utils.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('Proxy API');
});

// API routes,
app.get('/location', async (req, res) => {
  try {
    
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.CITY_DB_API_KEY}&q=${req.query.search}&format=json`);
    const data = formatCity(response.body);
    res.json(data);
    console.log(response.body);
    
  }
  catch(err) {
    console.log(err);
    console.log(req.query.search);
    res.status(500).send({ error: err });
  }
});

app.get('/weather?latitude=<some-lat>&longitude=<some-longitude>', async (req, res) => {
  try {
    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_DB_API_KEY}&latitude=${req.query.latitude}&longitude=${req.query.longitude}`);
   
    const data = formatWeather(response.body);
    res.json(data);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const response = await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${req.query.latitude}&longitude=${req.query.longitude}`);
    const data = formatYelp(response.body);
    res.json(data);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default app;