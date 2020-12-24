//BubbleSort
//l-its our list , which will be Sort
function BubbleSort(l){
    //Our list befor start operation
    console.log("BubbleSort have started "+l)
    
    //Take our length
    len=l.length;
    
    //do first cycle
    for(let a=0;a<len;a++){
    
        //do second cycle where we will be compare our elements
        for(let i=0;i<len-a-1;i++){
    
            //Compare our element and do Swop
            if(l[i]>l[i+1]){
                let t=l[i];
                l[i]=l[i+1];
                l[i+1]=t;
            }
            console.log(l)
        }
    }
    
    //Our list after operation
    console.log("BubbleSort have finished "+l);
    return l;
}

//Create our list
let ourList=[7,5,2,3,6,4]
ourList=BubbleSort(ourList);