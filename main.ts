let posY4 = 0
let posX = 0
let posY = 0
let direction = 0
let posX1 = 1
let posX2 = 2
let posX3 = 3
let posX4 = 4
let posY1 = 0
let posY2 = 1
let posY3 = 2
posY4 += 3
led.plot(posX, posY)
led.plot(posX1, posY)
led.plot(posX2, posY)
led.plot(posX3, posY)
led.plot(posX4, posY)
basic.forever(function () {
    led.unplot(posX, posY)
    led.unplot(posX2, posY)
    led.unplot(posX3, posY)
    led.unplot(posX1, posY)
    led.unplot(posX4, posY)
    posY += direction
    posY1 += direction
    posY2 += direction
    posY3 += direction
    posY4 += direction
    led.plot(posX, posY)
    led.plot(posX1, posY)
    led.plot(posX2, posY)
    led.plot(posX3, posY)
    led.plot(posX4, posY)
    if (posY <= 0) {
        direction = 1
    } else if (posY >= 4) {
        direction = -1
    }
    basic.pause(100)
})
