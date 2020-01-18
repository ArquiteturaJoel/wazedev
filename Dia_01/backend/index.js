const express = require('express');

const app = express();

// get, post, put, delete




//localhost:3333
//app.get('/')
app.get('/', (request, response) => {
  //return response.send('Hello omnistack');
  return response.json({message: 'Hello omnistack 10 - wazedev'});
});

app.listen(3333);

