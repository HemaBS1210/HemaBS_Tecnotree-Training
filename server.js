
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   function addNumbers(num1, num2, callback) {
//     // Perform the addition operation
//     let sum = num1 + num2;
    
//     // Call the callback function with the sum as an argument
//     callback(sum);
//   }
  
//   // Call the addNumbers function with two numbers and a callback function
//   addNumbers(10, 20, function(result) {
//  res.write("The result is: " + result);
//   });
//   res.end();
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

// function callbackFunction() {
//   console.log('Callback function called!');
// }

// server.on('request', callbackFunction);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

