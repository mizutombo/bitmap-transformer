const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer);
  });
}



getFile('./non-palette-bitmap.bmp', function (buffer) {
  for(let i = 0; i < buffer.length; i++){
      if(i > 54) {
        buffer[i] = buffer[i] * 1.5;
        // buffer[i] = 255 - buffer[i];
        // buffer[i] = 0xff; //needs bigger i increment
        // buffer[i+1] = 0xff; //same
        // buffer[i + 2] = 0xff; //same
      }
  }
  fs.writeFile('hex.bmp', buffer);

});

module.exports = getFile;
