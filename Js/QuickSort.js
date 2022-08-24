const QuickSort = (l) => {
  if (l.length < 2) {
    return l;
  }
  const pivot = l[Math.round(Math.random() * (l.length - 1))];
  const left = l.filter((i) => i < pivot);
  const center = l.filter((i) => i === pivot);
  const right = l.filter((i) => i > pivot);
  return [...QuickSort(left), ...center, ...QuickSort(right)];
};

const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(QuickSort(l));
