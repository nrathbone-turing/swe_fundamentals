# Lab: Algorithms

## Background Information

> Imagine you are a junior developer working for a financial technology company. Your team is tasked with developing a new feature for the company’s mobile banking app that enables users to set and track their savings goals.
>
> Your specific responsibility is to develop the functionality for the savings goal tracking system. This system should be able to set new savings goals based on specific users and set dates to achieve said goals, as well as update the savings progress towards the goals. It should also include a user notification when a goal date is approaching and the savings has not been met.
>
> In this lab, you will be writing pseudocode, defining basic commands, and developing a flowchart. These tasks will help you structure your approach to solving this problem and improve your understanding of programming.

## Instructions

**Problem-Solving Process**

Let's break down this problem using the SDLC methodology and create pseudocode for the order tracking system.

**Step 1: Requirements Gathering and Analysis**

* Identify the main functionalities of the system.

    * Savings Goal
    * Savings Progress
    * Savings Goal Status 
    * Savings Goal Notification 

* Define the variables within the functionalities. This is information needed to make the functions work properly, this can be user input or complied from user input.  

    * `userId`: unique identifier for the user
    * `targetAmount`: how much the user wants to save
    * `targetDate`: when the user wants to reach their goal
    * `amountSaved`: how much the user has saved so far
    * `savingsGoal`: combines targetAmount and targetDate as part of the goal definition

* Define input and output requirements for each functionality of the system. Use the following verbs to describe the actions within the main functionalities. 

    * Savings Goal
        * Input: `userId`, `targetAmount`, `targetDate`
        * Process: Create new savings goal; Store goal info
        * Output: Return confirmation of goal creation

    * Savings Progress
        * Input: `userId`, `amountSaved`, `targetAmount`
        * Process: Retrieve savings data; Calculate percentage
        * Output: Return progress as a percentage

    * Savings Goal Status
        * Input: `userId`, `amountSaved`, `targetAmount`
        * Process: Retrieve relevant data; Compare values
        * Output: Return status ("Goal Reached" or "In Progress")

    * Savings Goal Notification
        * Input: `userId`, `targetDate`, `currentDate`, `savingsGoalStatus`
        * Process: Retrieve and compare data; Compose notification
        * Output: Send reminder or congratulatory message

**Step 2: Design**

* Write the pseudocode for the system. Use the previously listed identifiers and process to develop an algorithm in pseudocode for the program.

### Function: savingsGoal

```
Function savingsGoal(goal)
    Function savingsGoal()
    Prompt user for User ID
    Prompt user for Target Amount
    Prompt user for Target Date
    Store User ID, Target Amount, and Target Date
    Return confirmation of goal creation
End Function
```

### Function: savingsProgress

```
Function savingsProgress(userId)
    Retrieve Amount Saved for userId
    Retrieve Target Amount for userId
    Calculate progress = (Amount Saved / Target Amount) * 100
    Return progress percentage
End Function
```

### Function: savingsGoalStatus

```
Function savingsGoalStatus(userId)
    Retrieve Target Amount and Amount Saved for userId
    If Amount Saved >= Target Amount
        Return "Goal Reached"
    Else
        Return "In Progress"
End If
End Function
```

### Function: savingsGoalNotification

```
Function savingsGoalNotification(userId)
    Retrieve Target Date and Current Date
    Retrieve Savings Progress
    If Target Date is near AND Goal not yet met
        Compose and Send reminder notification to userId
    Else If Goal Reached
        Compose and Send congratulatory message
    End If
End Function

```