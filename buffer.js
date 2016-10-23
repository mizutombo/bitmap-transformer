const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer);
    var offset = readHeader(buffer);
    transformFile(offset, buffer);
  });  
}

function readHeader(buffer) {
    let offset = buffer.readInt8(10, 4);
    return offset;
}

function transformFile(offset, buffer) {
  for(let i = 0; i < buffer.length; i++){
      if(i > offset) {
        // buffer[i] = buffer[i] * 0.9;
        // buffer[i] = 255 - buffer[i];
        // buffer[i] = 0xff; //needs bigger i increment
        // buffer[i+1] = 0xff; //same
        // buffer[i + 2] = 0xff; //same
      }
  }
  return buffer;
}

function writeFile(buf) {
  console.log('writeFile cb');
  fs.writeFile('modifiedBMP.bmp', buf);
}

getFile('./non-palette-bitmap.bmp', function(buffer) {
  writeFile(buffer);
});
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


module.exports = {getFile, readHeader, transformFile};
