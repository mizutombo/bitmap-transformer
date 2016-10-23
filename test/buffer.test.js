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
            let bufSlice = Buffer.from(buffer);
            console.log('bufSlice before transform func');
            console.log(bufSlice[100]);
            console.log(bufSlice);
            let transformed = importedFunc.transformFile(offset, buffer);
            let transformSlice = Buffer.from(transformed);
            console.log('bufSlice after transform func');
            console.log(bufSlice[100]);
            console.log(bufSlice);
            console.log('transform after transform func');
            console.log(transformSlice[100]);
            console.log(transformSlice);
            for(let i = offset + 1; i < transformSlice.length; i++) {
                transformSlice[i] = 255 - transformSlice[i];
            }
            console.log('bufSlice after for loop');
            console.log(bufSlice[100]);
            console.log(bufSlice);
            console.log('transformSlice after for loop');
            console.log(transformSlice[100]);
            console.log(transformSlice);
            assert.deepEqual(bufSlice, transformSlice);
            done();
        });
    });
});