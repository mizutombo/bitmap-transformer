const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer);
  });
}

function readHeader(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer);
  });
  var offsetInfo = getFile(bmp);
  var buf = offsetInfo.slice(10, 14);
  buf.readUInt8(0);
}

// function transformFile


// getFile('./non-palette-bitmap.bmp', function (buffer) {
//   for(let i = 0; i < buffer.length; i++){
//       if(i > 54) {
//         buffer[i] = buffer[i] * 0.9;
//         // buffer[i] = 255 - buffer[i];
//         // buffer[i] = 0xff; //needs bigger i increment
//         // buffer[i+1] = 0xff; //same
//         // buffer[i + 2] = 0xff; //same
//       }
//   }
//   fs.writeFile('hex.bmp', buffer);

// });


module.exports = {getFile, readHeader};
