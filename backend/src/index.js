const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const corsConfig = { origin: 'http://localhost:3000' };

app.use(cors(corsConfig));

app.use(express.json());

app.use(routes);

app.listen(8081, () => console.log('Server is running'));   