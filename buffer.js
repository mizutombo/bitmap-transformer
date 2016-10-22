const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer);
  });
}



getFile('./non-palette-bitmap.bmp', function (buffer) {
  for(let i = 0; i < buffer.length; i+=5){
      if(i > 54) {
          buffer[i] = 0xff;
      }
  }
  fs.writeFile('hex.bmp', buffer);

});

module.exports = getFile;
