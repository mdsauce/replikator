const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('public/index.html').pipe(res);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
