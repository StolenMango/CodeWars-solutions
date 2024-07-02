var maxSequence = function (arr) {
  if (arr.length === 0) return 0;
  const isBelowThreshold = (currentValue) => currentValue <= 0;
  if (arr.every(isBelowThreshold) === true) return 0;
  // Kadane's algorithm
  let max = arr[0];
  let sum = arr[0];
  // for each itteration we need to determine if we should
  // incorporate this value into out subarray or use this item as the first element of our subarray and discard the last one
  for (let i = 1; i < arr.length; i++) {
    if (sum + arr[i] > arr[i]) {
      sum += arr[i];
    } else {
      sum = arr[i];
    }
    max = Math.max(max, sum);
  }
  return max;
};
// arr[i]      1   -3   4   -1   2   1   -5   4
// sum    -2   1   -2   4   3    5   6   1    5
// max    -2   1   1    4   4    5   6   6    6
