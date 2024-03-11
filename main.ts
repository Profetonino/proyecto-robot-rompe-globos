/**
 * PLACA CONTROL SERVOS
 */
// PLACA CONTROL SERVOS
radio.onReceivedNumber(function (receivedNumber) {
    valor_Servo = Math.map(receivedNumber, -1023, 1023, 5, 170)
    servos.P0.setAngle(valor_Servo)
})
// CODIGO PARA LA PLACA DE MANDO
input.onButtonPressed(Button.A, function () {
    radio.sendString("ataca")
})
// PLACA CONTROL SERVOS
radio.onReceivedString(function (receivedString) {
    if (receivedString == "ataca") {
        servos.P1.setAngle(90)
        basic.pause(500)
        servos.P1.setAngle(0)
    }
    if (receivedString == "defiende") {
        servos.P2.setAngle(90)
        basic.pause(500)
        servos.P2.setAngle(0)
    }
})
/**
 * CÓDIGO PARA PLACA QUE HACE DE MANDO
 */
// CODIGO PARA LA PLACA DE MANDO
input.onButtonPressed(Button.B, function () {
    radio.sendString("defiende")
})
// CODIGO PARA LA PLACA CONTROL SERVOS
let valor_Servo = 0
servos.P0.setAngle(90)
servos.P1.setAngle(0)
servos.P2.setAngle(0)
radio.setGroup(1)
// CODIGO PARA LA PLACA DE MANDO
basic.forever(function () {
    valor_Servo = input.acceleration(Dimension.X)
    radio.sendNumber(valor_Servo)
    basic.pause(10)
})
