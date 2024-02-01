// This program has a deliberate error
function addNumbers(a, b) {
    if (typeof b !== 'number') {
        throw new Error('The second argument should be a number');
    }
    return a + b;
}

const result = addNumbers(10, 5); // Error: The second argument should be a number

console.log(result);



// Test cases
try {
    console.log(addNumbers(10, 5)); // Output: 15 (both arguments are numbers)
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
  
  try {
    console.log(addNumbers(15, -5)); // Output: 10 (both arguments are numbers, including a negative number)
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
  
  try {
    console.log(addNumbers("10", 5)); // Error: The second argument should be a number (the first argument is a string)
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }