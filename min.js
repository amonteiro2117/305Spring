// NodeJS program with a function to find the minimum element in an array

function findMin(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let min = arr[0]; // Assume the first element as the minimum
  
    // Iterate through the array to find the minimum element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return min;
  }
  
  // Test cases
const testCases = [
    { input: [3, 1, 4, 1, 5, 9], expected: 1 },
    { input: [10, 7, 5, 2, 8, 11], expected: 2 },
    { input: [50, 30, 20, 40, 10, 60], expected: 10 },
    { input: [1, 1, 1, 1, 1, 1], expected: 1 }, // All elements are the same
    { input: [], expected: undefined }, // Empty array
    { input: [-5, -2, -8, -1, -7, -3], expected: -8 }, // Negative numbers
  ];
  
  // Run the test cases
  testCases.forEach((test, index) => {
    const result = findMin(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: ${test.input}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Actual: ${result}`);
    console.log(`Result: ${result === test.expected ? 'Pass' : 'Fail'}`);
    console.log('\n');
  });