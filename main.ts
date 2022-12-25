radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + num + " " + "Int: " + receivedNumber)
    basic.pause(200)
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + num + " " + "Str: " + receivedString)
    basic.pause(200)
})
radio.onReceivedValue(function (name, value) {
    basic.showString("" + num + " " + "Key:Val" + name + ":" + value)
    basic.pause(200)
    radio.sendNumber(0)
})
let num = 0
num = 0
basic.forever(function () {
    basic.showNumber(num)
    radio.setGroup(num)
    if (num == 255) {
        num = 1
    }
    num += 1
    radio.sendNumber(num)
})
