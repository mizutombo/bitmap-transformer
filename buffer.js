const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer, readHeader(buffer));
  });
  
}

function readHeader(buffer) {
    let array = [];
    let buf = buffer;
    let offsetInfo = buffer.slice(10, 14);
    let num = offsetInfo.readUInt8(0);
    array.push(buf);
    array.push(num);
    return array;
    // cb(transformFile(num, buf, cb));
}

function transformFile(num, buf, cb) {
  for(let i = 0; i < buf.length; i++){
      if(i > num) {
        // buf[i] = buf[i] * 0.9;
        buf[i] = 255 - buf[i];
        // buffer[i] = 0xff; //needs bigger i increment
        // buffer[i+1] = 0xff; //same
        // buffer[i + 2] = 0xff; //same
      }
  }
  cb(writeFile(buf));
}

function writeFile(buf) {
  fs.writeFile('modifiedBMP.bmp', buf);
}

// FUNCTION CALL FOR TESTING BUFFER.JS STANDALONE
// getFile('./non-palette-bitmap.bmp', function(buffer) {
//   buffer;
// });

module.exports = {getFile, readHeader, transformFile, writeFile};
