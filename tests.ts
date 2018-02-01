{
  // Drive 100 ms forward
  ibit.motor(BBMotor.All, 1023);
  basic.pause(100);

  // Drive 100 ms reverse
  ibit.motor(BBMotor.All, -1023);
  basic.pause(100);

  // Drive 100 ms forward on left and reverse on right
  ibit.motor(BBMotor.Left, 1023);
  ibit.motor(BBMotor.Right, -1023);
  basic.pause(100);

  // Buzz for 100 ms
  ibit.buzz(1);
  basic.pause(100);
  ibit.buzz(0);

  // Read left and right line sensor
  basic.showNumber(ibit.readLine(BBLineSensor.Left));
  basic.showNumber(ibit.readLine(BBLineSensor.Right));

  // Read left and right light sensor
  basic.showNumber(ibit.readLight(BBLightSensor.Left));
  basic.showNumber(ibit.readLight(BBLightSensor.Right));

  // Read sonar values
  basic.showNumber(ibit.sonar(BBPingUnit.MicroSeconds));
  basic.showNumber(ibit.sonar(BBPingUnit.Centimeters));
  basic.showNumber(ibit.sonar(BBPingUnit.Inches));

  // Show all leds
  ibit.neoSetColor(neopixel.colors(NeoPixelColors.Red));
  ibit.neoShow();

  // Clear all leds
  ibit.neoClear();
  ibit.neoShow();

  // Show led at position 1
  ibit.neoSetPixelColor(0, neopixel.colors(NeoPixelColors.Red));
  ibit.neoShow();

  // Show led rainbow
  ibit.neoRainbow();
  ibit.neoShow();

  // Show led rainbow and shift
  ibit.neoRainbow();
  ibit.neoShift();
  ibit.neoShow();

  // Show led rainbow and rotate
  ibit.neoRainbow();
  ibit.neoRotate();
  ibit.neoShow();

  // Set brightness of leds
  ibit.neoBrightness(100);
  ibit.neoShow();

  // Use neo() variable
  ibit.neo().clear();
  ibit.neo().show();
}
