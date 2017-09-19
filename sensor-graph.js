const Barcli = require('barcli');
const five = require('johnny-five');
const Tessel = require('tessel-io');

const board = new five.Board({
    io: new Tessel(),
    repl: false,
    debug: false,
});

board.on('ready', () => {

    const range = [0, 1000];
    const graph = new Barcli({
        label: "The label ",
        range: range,
    });

    const sensor = five.Sensor({
        pin: 'a7',
        threshold: 5
    });
    sensor.on('change', () => {
        graph.update(sensor.value);
    });

});