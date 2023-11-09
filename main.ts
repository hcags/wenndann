input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Run = !(Run)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Count) {
        Count = 70
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Count) {
        Count = 30
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("Hast du mich grade umgetret ")
    basic.setLedColor(basic.rgb(255, 0, 0))
    basic.showString("Drest du mich bitte richtigrum ")
})
input.onGesture(Gesture.ScreenUp, function () {
    if (Count) {
        Count = 10
    }
})
let Run = false
let Count = 0
Count = 0
Run = true
basic.forever(function () {
    if (Run) {
        Count += 1
        basic.showString("" + (Count))
        if (100 == Count) {
            Count = 0
        }
    }
})
