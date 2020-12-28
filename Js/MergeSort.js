//MergeSort - Top3
function MergeSort(l){
    
    //Recursive Key
    if(l.length==1){
        return l
    }
    
    //Divide our list
    let mid=Math.floor(l.length/2);
    let left=l.slice(0,mid);
    let right=l.slice(mid);
    
    //Do recursive
    return Merge(MergeSort(left),MergeSort(right));
}
function Merge(left,right){
    let leftPointer=rightPointer=0;
    let result=[];
    //Do cycle while one of list give all elements
    while((leftPointer<left.length) && (rightPointer<right.length)){
        if(left[leftPointer]>right[rightPointer]){
            result.push(right[rightPointer])
            rightPointer++;
        }
        else{
            result.push(left[leftPointer])
            leftPointer++;
        }
    }
    //Extend our list 
    if(leftPointer==left.length){
        result.push(...right.slice(rightPointer))
    }
    else{
        result.push(...left.slice(leftPointer))
    }
    return result
}

//Create ourList and Check MergeSort
ourList=[2,6,43,12,53,4,75,34]
console.log(MergeSort(ourList))