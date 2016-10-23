const assert = require('assert');
const importedFunc = require('../buffer');

describe('Buffer', () => {
     it('returned buffer', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', buffer => {
            assert(buffer instanceof Buffer);
            done();
        });
     });

    it('read header for offset info', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', buffer => {
            let offset = importedFunc.readHeader(buffer);
            assert.equal(offset, 54);
            done();
        });
    });

    it('transformed bitmap', done => {
        importedFunc.getFile('non-palette-bitmap.bmp', buffer => {
            let offset = importedFunc.readHeader(buffer);
            let bufSlice = buffer.slice(offset + 1);
            console.log(bufSlice);
            let transformed = importedFunc.transformFile(offset, buffer);
            let transformSlice = transformed.slice(offset + 1);
            console.log(transformSlice);
            // for(let i = offset + 1; i < transformSlice.length; i++) {
            //     transformSlice[i] = 255 - transformSlice[i];
            // }
            assert.deepEqual(bufSlice, transformSlice);
            done();
        });
    });
});