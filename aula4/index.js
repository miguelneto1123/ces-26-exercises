const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const expses = require('express-session');
const fs = require('fs');

const app = express();
const port = 3000; // The port to listen to

// Handlebars templating configuration
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Cookie setting
app.use(cookieParser());
app.use(expses({
  secret: 'anything',
  saveUninitialized: true,
  resave: true
}));

// Body parser setting
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start server on port 8080
app.listen(port, () => {
  console.log("Server listening on port "+port);
})

// GET request to /get
app.get('/get', (req, res) => {
  let name = req.query.name;
  req.session.name = name;
  res.send('Hello, '+name+'<br><a href="http://localhost:3000">Go back</a>');
});

// POST request to /post
app.post('/post', (req, res) => {
  let name = req.body.name;
  req.session.name = name;
  res.send('Hello, '+name+'<br><a href="http://localhost:3000">Go back</a>');
});

// Index route
app.get('*', (req, res) => {
  let name = '';
  if (req.session) {
    if (req.session.name) {
      name = req.session.name
      fs.appendFile('files/names.txt', name+'\n', (err) => {
        if (err) throw err;
        console.log('Saved another name: '+name);
      });
    }
  }
  res.render('home', {
    name: name
  });
});
