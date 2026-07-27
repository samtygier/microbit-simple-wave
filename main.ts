function send_to_next () {
    radio.sendString("W" + convertToText(id + 1))
}
function flash () {
    basic.clearScreen()
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.clearScreen()
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
