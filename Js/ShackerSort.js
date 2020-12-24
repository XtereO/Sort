//ShackerSort
function ShackerSort(l){
    let left=0;
    let right=l.length-1;
    while (left<right){
        //Go from right side
        for(let i=left;i<right;i++){
            if (l[i]>l[i+1]){
                let t=l[i]
                l[i]=l[i+1]
                l[i+1]=t
            }
        }
        right--;
        
        //Go from left side
        for(let i=right;i>left;i--){
            if(l[i-1]>l[i]){
                let t=l[i]
                l[i]=l[i-1]
                l[i-1]=t
            }
        }
        left++;
    }
    return l
}
 
//Create our list
let ourList=[2,4,5,6,1,87,35,12,32];
console.log(ShackerSort(ourList))
