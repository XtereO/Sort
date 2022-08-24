const BubbleSort = (l) => {
  const len = l.length;
  let sortedL = [...l];
  for (let i = 0; i < len - 1; i++) {
    for (let j = i; j < len; j++) {
      if (sortedL[j - 1] > sortedL[j]) {
        [sortedL[j - 1], sortedL[j]] = [sortedL[j], sortedL[j - 1]];
      }
    }
  }
  return sortedL;
};

const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(BubbleSort(l));
