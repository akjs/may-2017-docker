const app = require('fast-track');

app.get('/', function (req, res) {
  res.send('Hello World')
})

const http = require('http');
const port = process.env.PORT || 3232;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
