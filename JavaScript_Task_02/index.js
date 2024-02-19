// Chapter 36: Functions: Passing them data

// EXERCISE # 01
// CALCULATE TOTAL COST
// Write a function called calculateTotalCost that takes two arguments: price (the price of an item) and quantity (the quantity of the item purchased). The function should calculate and return the total cost by multiplying the price and quantity. Test the function with different price and quantity values.

// function calculateTotalCost(price, quantity){
//     let totalCost = price * quantity
//     console.log("Total Cost:",totalCost)
// }
// calculateTotalCost(4, 7)


// EXERCISE # 02
// CALCULATE AREA OF A RECTANGLE
// Develop a function called calculateArea that accepts two arguments: length and width of a rectangle. The function should calculate and return the area of the rectangle using the formula: area = length * width. Test the function with various length and width values.

// function calculateArea(length, width){
//     let area = length * width
//     console.log("Area Of Rectangle:", area)
// }
// calculateArea(3, 7)


// EXERCISE # 03
// CALCULATE BMI (Body Mass Index) 
// Write a function called calculateBMI that takes two arguments: weight (in kilograms) and height (in meters). The function should calculate and return the BMI using the formula: BMI = weight / (height * height). Test the function with different weight and height values.

// function calculateBMI(weight, height){
//     let bodyMassIndex = weight / (height * height)
//     console.log("Body Mass Index(BMI):", bodyMassIndex)
// }
// calculateBMI(68, 1.75)


// EXERCISE # 04
// CALCULATE AREA OF TRIANGLE
// Develop a function named calculateTriangleArea that accepts three arguments: base, height, and side. The function should calculate and return the area of a triangle using the formula: area = (base * height) / 2. Test the function with various base, height, and side values.

function calculateTriangleArea(base, height, side){
    let areaOfTriangle = (base * height) / 2
    console.log("Area Of Triangle:", areaOfTriangle)
}
calculateTriangleArea(5, 8, 3)