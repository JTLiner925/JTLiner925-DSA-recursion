import React from "react";

function App() {
  const countSheep = function (num) {
    // Base case
    if (num === 0) {
      return "All sheep jumped over the fence";
    }
    // General case

    console.log(`${num}: Another sheep jumps over the fence`);
    return countSheep(num - 1);
  };
  console.log(countSheep(3));

  var powerCalculator = function (a, n) {
    if (n <= 0) {
      return 1;
      console.log("exponent should be >= 0");
    } else {
      return (a = a * powerCalculator(a, n - 1));
    }
  };

  console.log(powerCalculator(4, 2));
  const revString = function (str) {
    if (str === "") {
      return "";
    } else {
      return (str = revString(str.substr(1)) + str.charAt(0));
    }
  };
  console.log(revString("mom nom"));
  function tri(n) {
    if (n <= 1) {
      return n;
    } else {
      return n + tri(n - 1);
    }
  }

  console.log(tri(8));

  function multiSplit(xs, delimiters) {
    if (!delimiters.length) return xs;
    return xs
      .split(delimiters[0])
      .map((x) => multiSplit(x, delimiters.slice(1)));
  }

  let data = "02/20/2020";
  let res = multiSplit(data, "/");
  console.log(res);

  function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  console.log(fibonacci(6))

  const factorial = function (num){
    if(num === 1){
      return 1;
    }
    return num * factorial(num - 1)
  }
  console.log(factorial(5))


  
  return <main className="App">{/* content goes here */}</main>;
}

export default App;
