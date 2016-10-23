const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer);
  });  
}

function readHeader(buffer) {
    let offset = buffer.readInt8(10, 4);
    return offset;
}

function transformFile(offset, buffer) {
  buffer;
  for(let i = 0; i < buffer.length; i++){
      if(i > offset) {
        buffer[i] = 255 - buffer[i];
      }
  }
  return buffer;
}

function writeFile(buffer, cb) {
  fs.writeFile('modifiedBMP.bmp', buffer, (err) => {
    cb(err);
  });
}

module.exports = {getFile, readHeader, transformFile, writeFile};