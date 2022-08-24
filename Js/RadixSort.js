const RadixSort = (l) => {
  let radixStep = 0;
  let sortedL = [...l];
  while (true) {
    let basket = [[], [], [], [], [], [], [], [], [], []];
    sortedL.forEach((e) => {
      let basketIndex = Math.floor(e / Math.pow(10, radixStep)) % 10;
      basket[basketIndex].push(e);
    });
    sortedL = [];
    basket.forEach((b) => sortedL.push(...b));
    if (basket[0].length === sortedL.length) {
      return sortedL;
    }
    radixStep++;
  }
};

const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(RadixSort(l));
