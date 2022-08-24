const SelectionSort = (l) => {
  let sortedL = [...l];
  for (let i = 0; i < l.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < l.length; j++) {
      if (sortedL[minIndex] > sortedL[j]) {
        minIndex = j;
      }
    }
    [sortedL[minIndex], sortedL[i]] = [sortedL[i], sortedL[minIndex]];
  }
  return sortedL;
};

const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(SelectionSort(l));
