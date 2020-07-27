let posX = 0
let posY = 0
let posX1 = 1
let posY1 = 1
let posX2 = 2
let posY2 = 2
let posX3 = 3
let posY3 = 3
let posX4 = 4
let posY4 = 4
let direction = 1
led.plot(posX, posY)
led.plot(posX1, posY1)
led.plot(posX2, posY2)
led.plot(posX3, posY3)
led.plot(posX4, posY4)
basic.forever(function () {
    led.unplot(posX, posY)
    led.unplot(posX1, posY1)
    led.unplot(posX2, posY2)
    led.unplot(posX3, posY3)
    led.unplot(posX4, posY4)
    posY += direction
    posY1 += direction
    posY2 += direction
    posY3 += direction
    posY4 += direction
    led.plot(posX, posY)
    led.plot(posX1, posY1)
    led.plot(posX2, posY2)
    led.plot(posX3, posY3)
    led.plot(posX4, posY4)
    if (posY <= 0) {
        direction = 1
    } else if (posY >= 4) {
        direction = -1
    }
    if (posY1 <= 0) {
        direction = 1
    } else if (posY1 >= 4) {
        direction = -1
    }
    if (posY2 <= 0) {
        direction = 1
    } else if (posY3 >= 4) {
        direction = -1
    }
    if (posY3 <= 0) {
        direction = 1
    } else if (posY3 >= 4) {
        direction = -1
    }
    if (posY4 <= 0) {
        direction = 1
    } else if (posY4 >= 4) {
        direction = -1
    }
    basic.pause(100)
})
basic.forever(function () {
	
})
