// Week 5 Assignment - JavaScript Fundamentals
// This file contains all the JavaScript code for the assignment

// Part 1: Variables and Conditionals

// Variable declarations
let userName = "Alice";
const userAge = 28;
var isStudent = true;
let userScore = 85;

// Conditional statements example
function evaluateScore(score) {
    if (score >= 90) {
        return "Excellent!";
    } else if (score >= 70) {
        return "Good job!";
    } else {
        return "Keep practicing!";
    }
}

// Switch statement example
function getGrade(score) {
    let grade;
    switch(true) {
        case (score >= 90):
            grade = "A";
            break;
        case (score >= 80):
            grade = "B";
            break;
        case (score >= 70):
            grade = "C";
            break;
        case (score >= 60):
            grade = "D";
            break;
        default:
            grade = "F";
    }
    return grade;
}

// Part 2: Functions

// Function declaration
function calculateArea(width, height) {
    return width * height;
}

// Function expression
const greetUser = function(name) {
    return `Hello, ${name}! Welcome to our website.`;
};

// Arrow function
const multiply = (a, b) => a * b;

// Function with default parameters
function createMessage(name, message = "Hello") {
    return `${message}, ${name}!`;
}

// Part 3: Loops

// For loop example
function runForLoop() {
    let output = "For loop results:\n";
    for (let i = 1; i <= 5; i++) {
        output += `Count: ${i}\n`;
    }
    return output;
}

// While loop example
function runWhileLoop() {
    let output = "While loop results:\n";
    let count = 1;
    while (count <= 5) {
        output += `While count: ${count}\n`;
        count++;
    }
    return output;
}

// Loop through an array example
function loopThroughFruits() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    let output = "Fruits array:\n";
    
    for (let i = 0; i < fruits.length; i++) {
        output += `${i + 1}. ${fruits[i]}\n`;
    }
    
    return output;
}

// forEach method example
function showFruitsForEach() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    let output = "Fruits array (forEach):\n";
    
    fruits.forEach((fruit, index) => {
        output += `${index + 1}. ${fruit}\n`;
    });
    
    return output;
}

// Part 4: DOM Interactions

// Function to change text content
function changeText(elementId, newText) {
    document.getElementById(elementId).textContent = newText;
}

// Function to change style
function changeColor(elementId, color) {
    document.getElementById(elementId).style.color = color;
}

// Function to add a new list item
function addListItem(listId, newItem) {
    if (newItem.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = newItem;
        document.getElementById(listId).appendChild(li);
        return true;
    }
    return false;
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Initial setup or function calls can go here
});