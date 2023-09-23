


const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Add logs to the server
const morgan = require('morgan');
app.use(morgan('dev'));



app.get('/', (req, res) => {
    res.send('Home');
}   );

app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"});
}   );

app.get('/hello/:id', (req, res) => {
    res.send({status:200, message:"Hello, "+req.params.id});
}   );

app.listen(3000, () => {
    console.log('server is running on port 3000');
}   );


// Path: src/app.js

// Create a simple node js applicati on that will serve the following routes:
// home route: /
// test route: /test    
// hello route: /hello/:id

