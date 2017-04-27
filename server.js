var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

var routes = require('./api/routes/todoListRoutes');
routes(app);    

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);    
