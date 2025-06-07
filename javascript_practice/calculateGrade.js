// In this lesson, the task is to create a calculateGrade function. 
// This is broken down according to the process steps of defining the function, calling the function, and utilizing the function as needed. 

// Task 1: Define the Function if

// Identify the Task: This function calculates a student's final grade as a letter grade (A, B, C, etc.) based on their exam and assignment scores.
// Choose a Function Name: calculateGrade
// Determine Parameters: The function takes a parameter: examScore (number).
// Write the Code Block:

function calculateGrade(examScore) {
  // Determine letter grade based on a grading scale
  let letterGrade;
  if (examScore >= 90) {
    letterGrade = "A";
  } else if (examScore >= 80) {
    letterGrade = "B";
  } else if (examScore >= 70) {
    letterGrade = "C";
  } else if (examScore >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  // Return the calculated letter grade
  return letterGrade;
}

 // Consider Return Value: The function returns the calculated letter grade (letterGrade) as a string.

// Task 2: Call the Function

// Call the function
calculateGrade(85);

// Utilize the result (letter grade)
console.log("Student's final grade: ", calculateGrade(85)); // Student's final grade: B

// Task 3: Utilize the Results (Optional)

// In this example, the calculateGrade function is called with the examScore. 
// The function calculates the overall score and assigns a letter grade based on the grading scale. 
// Finally, the returned letter grade (finalGrade) is stored in a variable and displayed using console.log.
