//Example code snippet that reads the contents of a file and writes it to the console
//This code uses the fs module to read the file example.txt and pass its contents to a callback function that logs the contents to the console.


const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
