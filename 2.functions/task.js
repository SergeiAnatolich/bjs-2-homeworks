// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  arr.forEach(element => {
    if (element < min) {
      min = element;
    } else if (element > max) {
      max = element;
    };
    sum += element;
  });
  let avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let index = 0; index < arrOfArr.length; index++) {
    if (func(arrOfArr[index]) > max) {
      max = func(arrOfArr[index]);
    };
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  arr.forEach(element => {
    if (element < min) {
      min = element;
    } else if (element > max) {
      max = element;
    };
  });
  let difference = Math.abs(max - min);
  return difference;
}
