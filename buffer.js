const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer);
    var offset = readHeader(buffer);
    transformFile(offset, buffer);
    writeFile(buffer);
  });  
}

function readHeader(buffer) {
    let offset = buffer.readInt8(10, 4);
    return offset;
}

function transformFile(offset, buffer) {
  let transformedBuffer = buffer;
  for(let i = 0; i < transformedBuffer.length; i++){
      if(i > offset) {
        // buffer[i] = buffer[i] * 0.9;
        transformedBuffer[i] = 255 - transformedBuffer[i];
        // buffer[i] = 0xff; //needs bigger i increment
        // buffer[i+1] = 0xff; //same
        // buffer[i + 2] = 0xff; //same
      }
  }
  return transformedBuffer;
}

function writeFile(buf) {
  fs.writeFile('modifiedBMP.bmp', buf);
}

getFile('./non-palette-bitmap.bmp', function(buffer) {
});

module.exports = {getFile, readHeader, transformFile};