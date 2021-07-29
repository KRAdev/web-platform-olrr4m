//Adding numbers with for loop
let numbers = [100, 300, 400, 60, 40];


// forEach method
function each(array, fn) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    fn(element, i, array);
  }
}


const newNums = map(numbers, num => num + 1)

// Map method
function map(array, fn) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(fn(arr[i], i, array));
  }
  return result;
}

// Filter method
function filter(array, fn) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// Reduce method
function reduce(array, fn, startValue) {
  let result = startValue;
  for (let i = 0; i < array.length; i++) {
    result = fn(result, array[i], i, array);
  }
  return result;
}


