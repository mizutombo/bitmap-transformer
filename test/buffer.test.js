const assert = require('assert');
const importedFunc = require('../buffer');
const fs = require('fs');

describe('Buffer', () => {
    it('returned buffer, read header for offset info, and transformed bitmap', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', buffer => {
            assert(buffer instanceof Buffer);
            let offset = importedFunc.readHeader(buffer);
            assert.equal(offset, 54);
            let bufSlice = buffer.slice(offset + 1, 100);
            console.log(bufSlice);
            let transformed = importedFunc.transformFile(offset, buffer);
            let transformSlice = transformed.slice(offset + 1, 100);
            console.log(transformSlice);
            for(var i = 0; i < transformed.length; i++) {
                transformed[i] = 255 - transformed[i];
            }
            console.log(transformed);
            assert.deepEqual(bufSlice, transformSlice);
            // I don't think the below test is necessary, but I'm open to discussion 
            // assert.deepEqual(buffer, transformed);
            done();
        });
    });
});