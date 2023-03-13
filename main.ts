let Temp = 0
let CO2 = 0
kitronik_air_quality.setupGasSensor()
let statusLEDs = kitronik_air_quality.createAirQualityZIPDisplay()
statusLEDs.clear()
basic.forever(function () {
    kitronik_air_quality.measureData()
    basic.showString("Air Quality")
    CO2 = kitronik_air_quality.readeCO2()
    Temp = kitronik_air_quality.readTemperature(kitronik_air_quality.TemperatureUnitList.C)
    kitronik_air_quality.show("CO2: " + CO2, 3)
    kitronik_air_quality.show("Temp: " + Temp, 5)
    if (CO2 <= 350) {
        statusLEDs.showColor(kitronik_air_quality.colors(ZipLedColors.Green))
        basic.showIcon(IconNames.Happy)
    } else if (CO2 > 750) {
        statusLEDs.showColor(kitronik_air_quality.colors(ZipLedColors.Red))
        basic.showIcon(IconNames.Sad)
    } else {
        statusLEDs.showColor(kitronik_air_quality.colors(ZipLedColors.Orange))
        basic.showIcon(IconNames.Asleep)
    }
    basic.pause(5000)
})
