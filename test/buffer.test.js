const assert = require('assert');
const importedFunc = require('../buffer');

describe('Buffer', () => {

    it('returned buffer', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', (buffer) => {
            console.log(buffer);
            assert(buffer instanceof Buffer);
            // console.log(buffer);
            done();
        });
    });

    it('retrives offset info from header', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', function getCB(buffer) {
            function readCB(buffer) {
                assert.equal(buffer, 54);
            }
        })
    });

