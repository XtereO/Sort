//QuickSort-Top2
function QuickSort(l){
    //Recursive Key
    if (l.length<=1){
        return l;
    }
    
    //Divide our list on thre other
    let pivot=l[Math.floor(Math.random()*(l.length-1))];
    let litle=l.filter(value=>value<pivot);
    let large=l.filter(value=>value>pivot);
    let equal=l.filter(value=>value==pivot);
    
    //Do recursive
    return [...QuickSort(litle),...equal,...QuickSort(large)];
}

//Create ourList and check QuickSort
ourList=[3,53,12,43,23,76,45]
console.log(QuickSort(ourList))
