const assert = require('assert');
const importedFunc = require('../buffer');
const fs = require('fs');

describe('Buffer', () => {

    it('returned buffer and read header for offset info', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', buffer => {
            assert(buffer instanceof Buffer);
            let offset = importedFunc.readHeader(buffer);
            assert.equal(offset, 54);
            let bufSlice = buffer.slice(offset + 1, 100);
            console.log(bufSlice);
            let transformed = importedFunc.transformFile(offset, buffer);
            let transformSlice = transformed.slice(offset + 1, 100);
            console.log(transformSlice);
            for(var i = 0; i < transformSlice.length; i++) {
                transformSlice[i] = 255 - transformSlice[i];
            }
            console.log(transformSlice);
            assert.deepEqual(bufSlice, transformSlice);
            done();
        });
    });

    // it('retrieves offset info from header', done => {
    //     importedFunc.readHeader(buffer)

    //     }
    // });

});

    // it('retrives offset info from header', done => {
    //     importedFunc.getFile('non-palette-bitmap.bmp', function(buffer) {
    //         function (buffer) {
    //             assert.equal(buffer, 54);
    //         }
    //     })
