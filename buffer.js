const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer);
  });
}



getFile('./non-palette-bitmap.bmp', function (buffer) {
  buffer.writeInt32LE(ffffff, 54);
});

module.exports = getFile;
