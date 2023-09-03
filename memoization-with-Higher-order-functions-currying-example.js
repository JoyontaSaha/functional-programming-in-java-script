/*
  Memoization Example with Currying
  -------------------------------

  This code demonstrates the concept of memoization using currying in JavaScript.
  It includes a memoization function, an expensive operation simulation, and a curried "add" function.

  How it works:
  - The memoization function caches results to improve performance.
  - The "getOffsetNumber" function simulates a costly computation.
  - The "add" function is curried for partial application.

  Logs are added for tracking and understanding the process.

  Author: [Joyonta Saha]
  Date: [03-09-2023]

*/



// A simple memoization function to cache results
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = args.join('-'); // Create a unique key based on arguments
    console.log('Args: ', args[0], ' and ', args[1]); // Log the arguments for tracking
    if (cache.has(key)) {
      console.log(`Memoized - Returning cached result for key: ${key}`);
      return cache.get(key); // Return cached result if available
    }
    console.log(`Calculating result for key: ${key}...`);
    const result = fn(...args); // Compute and cache the result
    console.log(`Result calculated for key: ${key} - Caching. Result: ${result}`);
    cache.set(key, result);
    return result;
  };
}

// Expensive function to simulate getting an offset number
function getOffsetNumber() {
  console.log('Calculating offset... (Expensive operation)');
  return 42; // Simulating a costly computation
}

// Curried add function
const add = a => b => {
  console.log(`Adding ${a} and ${b}...`); // Added console log for tracking
  return a + b;
};

// Create a memoized version of addOffset
const memoizedAddOffset = memoize(add(getOffsetNumber()));

// Now, you can use memoizedAddOffset to efficiently reuse the offset value

console.log(memoizedAddOffset(4)); // This calculates and caches the offset
console.log(memoizedAddOffset(6)); // This reuses the cached offset
console.log(memoizedAddOffset(4)); // This reuses the cached offset
