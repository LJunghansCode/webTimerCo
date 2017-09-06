const express     = require('express'),
      compression = require('compression');
      app         = express();
// Run the app by serving the static files
// in the dist directory
app.use(compression());
app.use(express.static(__dirname + '/dist'));
const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(process.env.PORT || 8080);