const fs = require('fs');
const assert = require('assert');
const getFile = require('../buffer');

describe('Buffer', () => {

    it('returned buffer', done => {
        getFile('non-palette-bitmap.bmp', buffer => {
            assert(buffer instanceof Buffer);
            console.log(buffer);
            done();
        });
    });
    
});
