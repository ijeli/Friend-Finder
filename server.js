var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 5757;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoute.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT + " http://localhost:" + PORT);
});