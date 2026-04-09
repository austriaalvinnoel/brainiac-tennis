const http = require('http');
const fs   = require('fs');
const path = require('path');
const port = 3000;

const mime = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

const root = 'C:/Users/lindol/Downloads/brainiac mobile app';

http.createServer(function(req, res) {
  var url = req.url === '/' ? '/brainiac-tennis-app.html' : req.url;
  var file = path.join(root, url.split('?')[0]);

  fs.readFile(file, function(err, data) {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    var ext = path.extname(file);
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, function() {
  console.log('Brainiac Tennis running at http://localhost:' + port);
});
