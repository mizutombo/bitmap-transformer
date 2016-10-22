const assert = require('assert');
const importedFunc = require('../buffer');

describe('Buffer', () => {

    it('returned buffer', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', (buffer) => {
            assert(buffer instanceof Buffer);
            // console.log(buffer);
            done();
        });
    });

    // it('retrives offset info from header', done => {
    //     importedFunc.getFile('non-palette-bitmap.bmp', (buffer) => {
    //         (buffer) => {
    //             assert.equal()
    //         } 
    //     });
    // });

});


