const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer, readHeader(buffer, cb));
  });
}

function readHeader(buffer, cb) {
    let offsetInfo = buffer.slice(10, 14);
    let num = offsetInfo.readUInt8(0);
    console.log(num);
    cb(transformFile(num, buffer));
}

function transformFile(num, buffer, cb) {
  for(let i = 0; i < buffer.length; i++){
      if(i > num) {
        buffer[i] = buffer[i] * 0.9;
        // buffer[i] = 255 - buffer[i];
        // buffer[i] = 0xff; //needs bigger i increment
        // buffer[i+1] = 0xff; //same
        // buffer[i + 2] = 0xff; //same
      }
  }
  cb(writeFile(buffer));
}

function writeFile(buffer) {
  fs.writeFile('modifiedBMP.bmp', buffer);
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


module.exports = {getFile};
