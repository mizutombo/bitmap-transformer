for(let i = 0; i < buffer.length; i++){
    if(i > 1078) {
        buffer[i] = 7;
    }
}
fs.writeFile('fubarred.bmp', buffer, done);
});

it('makes buffer from string', done => {
    const buffer = Buffer.from('the quick brown fox', 'ascii');
    console.log(buffer);
});
