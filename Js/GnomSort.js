const GnomSort = (l) => {
  let sortedL = [...l];
  let i = 1;
  while (i < l.length) {
    if (i > 0 && sortedL[i - 1] > sortedL[i]) {
      [sortedL[i - 1], sortedL[i]] = [sortedL[i], sortedL[i - 1]];
      i--;
    } else {
      i++;
    }
  }
  return sortedL;
};

const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(GnomSort(l));
