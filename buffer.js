const fs = require('fs');

function getFile(bmp, cb) {
  fs.readFile(bmp, (err, buffer) => {
    cb(buffer, readHeader(buffer, cb));
  });
}

function readHeader(buffer, cb) {
    let buf = buffer;
    let offsetInfo = buffer.slice(10, 14);
    let num = offsetInfo.readUInt8(0);
    console.log('readHeader cd');
    cb(transformFile(num, buf, cb));
}

function transformFile(num, buf, cb) {
  console.log('transformFile cb');
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
  console.log('writeFile cb');
  fs.writeFile('modifiedBMP.bmp', buf);
}

getFile('./non-palette-bitmap.bmp', function(buffer) {
  buffer;
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


module.exports = {getFile};
