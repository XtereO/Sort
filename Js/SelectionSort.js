//SelectionSort
function SelectionSort(l){
    //Do cycle for each element and select minId and insert on position
    for(let i=0;i<l.length-1;i++){
        let minId=i

        for(let a=i;a<l.length-1;a++){
            
            if (l[minId]>l[a+1]){
                minId=a+1
            }
    
        }
        
        let t=l[minId]
        l[minId]=l[i]
        l[i]=t

    }
    return l
}

//Create ourList and Check our algorithm
ourList=[2,1,6,3,1,7,4]
console.log(SelectionSort(ourList))


