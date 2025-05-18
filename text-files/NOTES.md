# Introduction

These notes will be a place where I can think through building this project.

The project is a basic calculator that can work via a web browser. Their will be a interactive UI the mimics a calculator. the functionality will be made with JavaScript and the design of the UI will be made using CSS.

# Plan 

This plan provides a step by step guide to get this project from zero to completion. each point is numbered and the number corresponds to the block of pseudo code written below. It is best to complete each part of the plan before moving on to the next.

## JS Functionality

1. Create functions that complete basic math operations. I need separate functions for, adding, subtracting, dividing, and multiplying.

2. Create three variables one for each part of the operation, a number, a operator, and another number. These variables will be used later to update my display

3. Create a function called `operate()` which takes an operator and two numbers and then calls one of the above functions on the numbers

## HTML

4. Create a basic HTML calculator with a button for each digit and one for each operator also include (`=`, `.`, `AC`)

5. Also give the calculator a display where the inputs and outputs can be displayed

## JS Functionality

6. Create functions that populate the display when you click the digit buttons and store the content of the display for later.

7. Take the numbers you just stored then use the `operate()` function when the user presses the `=` button, according to the operator that was selected between the numbers


# Pseudo code

## JS Functionality

1. // CREATE a function called `add()` that takes two integers as parameters.

   // CREATE functionality that takes the two parameters and adds them together.
   // RETURN the results in the console. 

   // CREATE a function called `sub()` that takes two integers as parameters.

   // CREATE functionality that takes the two parameters and subtracts them.
   // RETURN the results in the console.

   // CREATE a function called `multi()` that takes two integers as parameters.

   // CREATE functionality that takes the two parameters and multiplies them together.
   // RETURN the results in the console.

   // CREATE a function called `div()` that takes two integers as parameters.

   // CREATE functionality that takes the two parameters and divides them.
   // RETURN the results in the console.
------------------------------------------------

2. // CREATE a variable called `numOne` initialized to null.
   
   // CREATE a variable called `numTwo` initialized to null.

   // CREATE a variable called `op` initialized to null.
-------------------------------------------------

3. // CREATE a function called `operate()`.
   
   // ACCEPT the inputs of the two numbers and the operator that has been selected

   // IF/ELSE statement that choses a operation function based on the chosen operator

---------------------------------------------------

## HTML

4. // CREATE A div container which will hold all items of the calculator.

   // DRAW a plan on paper of how the items inside the container will be arranged.

   // CREATE all the sub-divs that will sit inside the container.

   // CREATE all the buttons that will sit inside the sub-divs.

5. // CREATE the display that will show the outputs.
----------------------------------------------------

## JS Functionality

6. // CREATE functions that display the button clicked in the display.

   // STORE the values in variables (`numOne`, `numTwo`, `op`) to be used for other functions.

7. // CALL the variables above with the `operate()` function when the `=` button is pressed.
   