const assert = require('assert');
const chai = require('chai');
const chaiAssert = require('chai').assert;
chai.use(require('chai-fs'));
const bmpFunctions = require('../index');

describe('Buffer', () => {
     it('return buffer', done => {
        bmpFunctions.transformBitmap('non-palette-bitmap.bmp', (err, buffer) => {
            if (err) return done(err);
            assert(buffer instanceof Buffer);
            done();
        });
     });

    it('read header for offset info', done => {
        bmpFunctions.transformBitmap('non-palette-bitmap.bmp', (err, buffer) => {
            if (err) return done(err);
            let offset = bmpFunctions.readHeader(buffer);
            assert.equal(offset, 54);
            done();
        });
    });

    it('test transformed bitmap by transforming and then reversing transformation', done => {
        bmpFunctions.transformBitmap('non-palette-bitmap.bmp', (err, buffer) => {
            if (err) return done(err);
            let offset = bmpFunctions.readHeader(buffer);
            let originalBuffer = bmpFunctions.createBuffer(buffer);
            let transformedBuffer = bmpFunctions.alterBitmapPixels(offset, buffer);
            for(let i = offset + 1; i < transformedBuffer.length; i++) {
                transformedBuffer[i] = 255 - transformedBuffer[i];
            }
            assert.deepEqual(transformedBuffer, originalBuffer);
            done();
        });
    });

    it('wrote file', done => {
        bmpFunctions.transformBitmap('non-palette-bitmap.bmp', (err, buffer) => {
            if (err) return done(err);
            let offset = bmpFunctions.readHeader(buffer);
            let alteredBitmap = bmpFunctions.alterBitmapPixels(offset, buffer);
            bmpFunctions.writeNewBitmap(alteredBitmap, (err) => {
                if (err) return done(err);
            });
            chaiAssert.isFile('modifiedBMP.bmp');
            done();
        }); 
    });    
});