const express = require('express');

const app = express();

app.use('', (req, res) => res.send('Running...'));

app.listen(3000)