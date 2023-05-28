const fs = require('fs');

const content = 'user';

fs.writeFile('text.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
