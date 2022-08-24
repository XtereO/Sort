const ShackerSort = (l) => {
  let sortedL = [...l];
  let i = 0;
  while (l.length >= i) {
    let [left, right] = [i, l.length - i];
    for (let j = left; j < right; j++) {
      if (sortedL[j - 1] > sortedL[j]) {
        [sortedL[j - 1], sortedL[j]] = [sortedL[j], sortedL[j - 1]];
      }
    }
    right--;
    for (let j = right - 1; j > left; j--) {
      if (sortedL[j - 1] > sortedL[j]) {
        [sortedL[j - 1], sortedL[j]] = [sortedL[j], sortedL[j - 1]];
      }
    }
    i++;
  }
  return sortedL;
};

const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(ShackerSort(l));
