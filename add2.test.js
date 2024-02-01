// Test case 1: Valid numbers
const result1 = addNumbers(10, 5);
console.log(result1); // Output: 15

// Test case 2: Valid numbers with negative values
const result2 = addNumbers(-10, -5);
console.log(result2); // Output: -15

// Test case 3: Valid numbers with decimal values
const result3 = addNumbers(3.14, 2.86);
console.log(result3); // Output: 6

// Test case 4: Invalid second argument (not a number)
try {
    const result4 = addNumbers(10, "5");
    console.log(result4);
} catch (error) {
    console.log(error.message); // Output: The second argument should be a number
}

// Test case 5: Invalid first argument (not a number)
try {
    const result5 = addNumbers("10", 5);
    console.log(result5);
} catch (error) {
    console.log(error.message); // Output: The first argument should be a number
}