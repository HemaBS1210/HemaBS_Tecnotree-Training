const http = require('http');

const hostname = 'localhost';
const port = 3000;

function addNumbers(num1, num2, callback) {
  // Perform the addition operation
  let sum = num1 + num2;

  // Call the callback function with the sum as an argument
  callback(sum);
}

const server = http.createServer((req, res) => {
  // Call the addNumbers function with two numbers and a callback function
  addNumbers(10, 20, function(result) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`The result is: ${result}`);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
