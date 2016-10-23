const assert = require('assert');
const importedFunc = require('../buffer');
const fs = require('fs');

describe('Buffer', () => {

    it('returned buffer', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', (err, buffer) => {
            var header = importedFunc.readHeader(buffer);
            console.log(header[0]);
            assert(header[0] instanceof Buffer);
            done();
        });
    });
});

    // it('read offset info from header', done => {
    //     fs.readFile('non-palette-bitmap.bmp', (err, buffer) => {
    //         var buf = importedFunc.readHeader(buffer, null);
    //         assert.equal(buf, 54);
    //         done();
    //     });
    //     });

    // it('retrives offset info from header', done => {
    //     importedFunc.readHeader('non-palette-bitmap.bmp', (buffer) => {
    //         // function readCB(buffer) {
    //             console.log(buffer);
    //             assert.equal(buffer, 54);
    //         // };
    //     });
    //     done();
    // });
