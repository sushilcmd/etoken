const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.Server(app);

const { dbConn } = require('./app/db/dbCon');

//routes
const userRoute = require('./app/routes/user.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoute);

dbConn().then(_ => {
  server.listen(3400, () => {
    console.log('Server listen on 3400')
  });
});