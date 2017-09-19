const five = require("johnny-five");
const Tessel = require("tessel-io");

const board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {

    const sensor = new five.Sensor({
        pin: "a7", 
        threashold: 2
    });

    const led = new five.Led("b5");

    sensor.on('change', () => {
        led.brightness(sensor.scaleTo(0, 255));

    })
});
