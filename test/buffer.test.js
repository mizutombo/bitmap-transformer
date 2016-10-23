const assert = require('assert');
const importedFunc = require('../buffer');
const fs = require('fs');

describe('Buffer', () => {

    it('returned buffer and read header for offset info', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', buffer => {
            assert(buffer instanceof Buffer);
            var offset = importedFunc.readHeader(buffer);
            assert.equal(offset, 54);
            importedFunc.transformFile(offset, buffer);
            
            done();
        });
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
