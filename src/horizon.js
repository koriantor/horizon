"use strict";
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// Physics == backend
app.use('/physics/static', express.static( path.join(__dirname, 'public/static') ));

app.get('/', (req, res) => {
    res.sendFile( path.join(__dirname + '/public/locations/index.html') );
});


app.listen(port);