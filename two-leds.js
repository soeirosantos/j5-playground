const Tessel = require('tessel-io');
const five = require('johnny-five');

const board = new five.Board({
    io: new Tessel()
});

board.on('ready', () => {
    const leds = new five.Leds(["a5", "a6"]);

    let index = 0;
    let step = 1;

    board.loop(100, () => {
        leds.off();
        leds[index].on();
        index += step;
        if (index === 0 || index === leds.length - 1) {
            step *= -1;
        }
    });
});
