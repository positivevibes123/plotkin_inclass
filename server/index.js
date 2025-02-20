/* Example comment */

/* Load the http module to create an HTTP server. */
const express = require('express');
const PORT = 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello New Paltz!');
});

/*const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello New Paltz!\n");
});*/

/* The two functions below are identical:

const square = x => x * x;

function square2(x) {
    return x * x;
}*/

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

console.log("Hello World!");