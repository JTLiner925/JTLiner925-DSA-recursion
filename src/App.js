import React from 'react';

function App() {

  const countSheep = function(num) {
    // Base case
    if (num.length === 0) {
        return 'All sheep jumped over the fence';
    }
    // General case
    return num[0] + countSheep(num.slice(1));

}

let lst = [3,2,1];
console.log(countSheep(lst));

  return (
    <main className='App'>
      {/* content goes here */}
    </main>
  );
}

export default App;