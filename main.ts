input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Direction2 = 0
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Run = !(Run)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Direction2 = -1
})
let Direction2 = 0
let Run = false
let Count = 0
Run = true
Direction2 += 1
basic.forever(function () {
    if (Run) {
        Count += Direction2
        basic.showString("" + (Count))
        if (10 == Count && Direction2 == 0) {
            Count = 10
        } else if (Count == 0 && Direction2 == -1) {
            Direction2 = 10
        }
    }
})
