const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.statusCode = 200;
    res.end('Welcome to the homepage!');
  } else if (url === '/about') {
    res.statusCode = 200;
    res.end('This is the about page.');
  } else if (url === '/contact') {
    res.statusCode = 200;
    res.end('Contact us at contact@example.com');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
