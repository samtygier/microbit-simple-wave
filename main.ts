function send_to_next () {
    radio.sendString("W" + convertToText(id + 1))
}
function flash () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.play(music.tonePlayable(1000, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 0)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "W" + convertToText(id)) {
        flash()
        send_to_next()
    }
})
input.onButtonPressed(Button.B, function () {
    flash()
    send_to_next()
})
let id = 0
id = 1
basic.showNumber(id)
basic.pause(100)
basic.clearScreen()
