//! Start by creating the variables for the data recorded

// Raw data: 32°F, 25°C, 70°F, 18°C, 80°F, 15°C, 72°F, 28°C, 68°F, 20°C, 75°F, 23°C, 82°F, 30°C, 65°F, 22°C, 77°F, 26°C, 78°F, 24°C, 73°F, 21°C, 79°F, 27°C, 71°F, 19°C, 74°F, 17°C, 76°F, 29°C

const Day1TempF = 32;
const Day2TempC = 25;
const Day3TempF = 70;
const Day4TempC = 18;
const Day5TempF = 80;
const Day6TempC = 15;
const Day7TempF = 72;
const Day8TempC = 28;
const Day9TempF = 68;
const Day10TempC = 20;
const Day11TempF = 75;
const Day12TempC = 23;
const Day13TempF = 82;
const Day14TempC = 30;
const Day15TempF = 65;
const Day16TempC = 22;
const Day17TempF = 77;
const Day18TempC = 26;
const Day19TempF = 78;
const Day20TempC = 24;
const Day21TempF = 73;
const Day22TempC = 21;
const Day23TempF = 79;
const Day24TempC = 27;
const Day25TempF = 71;
const Day26TempC = 19;
const Day27TempF = 74;
const Day28TempC = 17;
const Day29TempF = 76;
const Day30TempC = 29;

// Organize and rename the data into an array for each temperate unit

const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];


//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

// From F to C
// Formula to pass from F to C: (tempInFahrenheit - 32) * 5 / 9

const fahrenheitTempsToCelsius = fahrenheitTemps.map(temp => ((temp - 32) * 5 / 9));

// From C to F
// Formula to pass from C to F: (tempInCelsius * 9 / 5) + 32

const celsiusTempsToFahrenheit = celsiusTemps.map(temp => ((temp * 9 / 5) + 32));

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

const tot_temperature_in_fahrenheit = fahrenheitTemps.reduce((sum, temp) => sum + temp, 0);
const tot_temperature_in_celsius = celsiusTemps.reduce((sum,temp) => sum + temp, 0);

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / fahrenheitTemps.length
const avg_temperature_in_celsius = tot_temperature_in_celsius / celsiusTemps.length

//! Console.log the results for your own inspection if you'd like

console.log(tot_temperature_in_fahrenheit)
console.log(tot_temperature_in_celsius)
console.log(avg_temperature_in_fahrenheit)
console.log(avg_temperature_in_celsius)

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};