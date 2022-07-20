input.onButtonPressed(Button.A, function () {
    butA = 1
})
input.onButtonPressed(Button.B, function () {
    butB = 1
})
let butB = 0
let butA = 0
butA = 0
butB = 0
basic.forever(function () {
    if (butA == 1) {
        for (let index = 0; index <= 10; index++) {
            basic.showNumber(10 - index)
            basic.pause(200)
            if (butB == 1) {
                butB = 0
                basic.clearScreen()
                break;
            }
            butA = 0
        }
    }
})
