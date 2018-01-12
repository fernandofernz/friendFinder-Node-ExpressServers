var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var apiRouter = require("./app/routing/apiRoutes");
apiRouter(app);

var htmlRouter = require("./app/routing/htmlRoutes");
htmlRouter(app);

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });