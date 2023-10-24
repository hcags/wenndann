input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Run = !(Run)
})
let Run = false
let Count = 0
Run = true
basic.forever(function () {
    if (Run) {
        Count += 1
        basic.showString("" + (Count))
        if (22 == Count) {
            Count = 0
        }
    }
})
