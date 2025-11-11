# makerDrive Extension for Microsoft MakeCode 

This code provides the driver for [**makerDrive** - Simplifying H-Bridge Motor Driver for Beginner](https://my.cytron.io/p-maker-drive-simplifying-h-bridge-motor-driver-for-beginner?gclid=EAIaIQobChMImtqtyp7rkAMVeAyDAx3iNjp5EAAYASAAEgLc1PD_BwE).


## DC Motors

Run Motor 1 forward at 50% speed when button A is pressed, brake the motor when button B is pressed.

```blocks
input.onButtonPressed(Button.A, function () {
    makerDrive.runMotor(MotorChannel.M1, MotorDirection.Forward, 127)
})
input.onButtonPressed(Button.B, function () {
    makerDrive.brakeMotor(MotorChannel.M1)
})
```
  
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>  
