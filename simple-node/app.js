const http = require('http');
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`<!DOCTYPE "html">
    <html>
      <head>
        <title>Hello World Page</title>
      </head>
      <body>
        Hello ${process.env.NAME}!
      </body>
    </html>`);
  response.end();
});

server.listen(4589);
console.log("Server is listening");
