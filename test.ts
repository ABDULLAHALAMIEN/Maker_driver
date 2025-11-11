// tests go here; this will not be compiled when this package is used as a library

// Loop forever.
basic.forever(function () {
    // Run Motor 1 forward at 50% speed for 1 second.
    makerDrive.runMotor(MotorChannel.M1, MotorDirection.Forward, 127)
    basic.pause(1000)
    makerDrive.brakeMotor(MotorChannel.M1)

    // Run Motor 2 backward at 100% speed for 1 second.
    makerDrive.runMotor(MotorChannel.M2, MotorDirection.Backward, 255)
    basic.pause(1000)
    makerDrive.brakeMotor(MotorChannel.M2)
