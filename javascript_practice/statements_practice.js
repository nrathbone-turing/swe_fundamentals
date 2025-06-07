// Scenario: For this practice, you role is a junior developer working for a smart home technology company. 
// Your task is to implement features that manage and control various smart home devices based on user inputs and sensor data. 
// This involves checking conditions and iterating through device settings.

// statements_practice.js

// Define Variables
let temperature = 22;
let motionDetected = true;
let lightStatus;
let timeOfDay = "afternoon"; // Other possible values: "morning", "evening", "night"

// Conditional Statements

// if statement
if (temperature > 25) {
  console.log("Turning on the air conditioner.");
}

// if-else statement
if (motionDetected) {
  console.log("Turning on the lights.");
} else {
  console.log("Turning off the lights.");
}

// else-if statement
if (timeOfDay === "morning") {
  lightStatus = "off";
} else if (timeOfDay === "afternoon") {
  lightStatus = "dim";
} else if (timeOfDay === "evening") {
  lightStatus = "bright";
} else {
  lightStatus = "off";
}
console.log("Light status:", lightStatus);

// Repetition Statements

// while loop
while (temperature > 20) {
  console.log(temperature);
  temperature--;
}

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}