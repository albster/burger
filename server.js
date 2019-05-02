var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));

// parse application/json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controllers.js');

app.use(routes);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });