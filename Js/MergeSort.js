const MergeSort = (l) => {
  if (l.length < 2) {
    return l;
  }
  const mid = Math.floor(l.length / 2);
  const left = l.slice(0, mid);
  const right = l.slice(mid);
  return Merge(MergeSort(left), MergeSort(right));
};
const Merge = (left, right) => {
  let result = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] > right[rightPointer]) {
      result.push(right[rightPointer]);
      rightPointer++;
    } else {
      result.push(left[leftPointer]);
      leftPointer++;
    }
  }
  if (leftPointer === left.length) {
    result.push(...right.slice(rightPointer));
  } else {
    result.push(...left.slice(leftPointer));
  }
  return result;
};

const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(MergeSort(l));
