const fs = require('fs');
const assert = require('assert');

describe('Buffer', () => {

    it('returned from file', done => {
        fs.readFile('non-palette-bitmap.bmp', (err, buffer) => {
            assert(buffer instanceof Buffer);
            for(let i = 0; i < buffer.length; i++){
                if(i > 1078) {
                    buffer[i] = 7;
                }
            }
            fs.writeFile('fubarred.bmp', buffer, done);
        });

    });

    it('makes buffer from string', done => {
        const buffer = Buffer.from('the quick brown fox', 'ascii');
        console.log(buffer);
    });
});
