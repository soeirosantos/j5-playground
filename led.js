const Tessel = require('tessel-io');
const five = require('johnny-five');

const board = new five.Board({
    io: new Tessel()
});

board.on('ready', () => {
    let led = five.Led('a5');
    led.pulse(500);
});
