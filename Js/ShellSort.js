const ShellSort = (l) => {
  let sortedL = [...l];
  let step = Math.floor(l.length / 2);
  while (step >= 1) {
    for (let i = 0; i < l.length - step; i++) {
      if (sortedL[i] > sortedL[i + step]) {
        [sortedL[i], sortedL[i + step]] = [sortedL[i + step], sortedL[i]];
      }
    }
    step = Math.floor(step / 2);
  }
  for (let i = 1; i < l.length; i++) {
    const temp = sortedL[i];
    let j = i;
    while (j > 0 && sortedL[j - 1] > temp) {
      sortedL[j] = sortedL[j - 1];
      j--;
    }
    sortedL[j] = temp;
  }
  return sortedL;
};

const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(ShellSort(l));
