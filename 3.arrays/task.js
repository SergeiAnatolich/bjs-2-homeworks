function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(e => e > 0).filter(e => e % 3 === 0).map(e => e * 10);
  return resultArr;
}
