// Provided variables

const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Watering Control Loops

if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// Garden Lights Control Loops

if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// Soil Moisture Adjustment Loops

while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}