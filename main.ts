input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Run = !(Run)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("Hast du mich grade umgetret ")
    basic.setLedColor(basic.rgb(255, 0, 0))
    basic.showString("Drest du mich bitte richtigrum ")
})
let Run = false
let Count = 0
Run = true
basic.forever(function () {
    if (Run) {
        Count += 1
        basic.showString("" + (Count))
        if (10 == Count) {
            Count = 0
        }
    }
})
