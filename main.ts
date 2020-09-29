let Start = 0
let Elapsed = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    let running_time = 0
    Elapsed = running_time - Start
    basic.showNumber(Elapsed / 1000)
})
basic.forever(function () {
	
})
