function fibonacci(n) {
  if(n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
}
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  // console.log("=>", fibonacci(0));
  console.log("=>", fibonacci(5))

  // console.log("");

  // console.log("Expecting: 1");
  // console.log("=>", fibonacci(2));

  // console.log("");

  // console.log("Expecting: 55");
  // console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file



/* n is equal to the number of times we call the fibonnaci sequence 
 if else loop
 if n < 2, return the number since the value will be 0, 1 always
 else
 return fxn(n-1) + fxn(n-2)
 adds the previous two numbers together


 */




// And a written explanation of your solution
