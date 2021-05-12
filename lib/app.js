/* eslint-disable no-console */
// import dependencies
import express, { request } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { formatData } from './munge-utils.js';

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
app.get('', async (req, res) => {
  try {
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=pk.3d5273f4354861214321dc56f8a9f287&q=${req.query.search}&format=json`)
   
    const data = formatData(response.body);
    res.json(data);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default app;