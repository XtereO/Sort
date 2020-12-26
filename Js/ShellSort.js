//ShellSort
function ShellSort(l){
    //Take Step
    let step=Math.floor((l.length)/2)
    
    //Do cycle
    while (step>0){
        for(let a=0;a<l.length-step;a++){
            //Compare "a" element with "a+step"
            if (l[a]>l[a+step]){
                let t=l[a]
                l[a]=l[a+step]
                l[a+step]=t
            }
        }
        step=Math.floor(step/2)
    }
    
    //InsertSort
    for(let a=1;a<l.length;a++){
        //Take last item
        let temp=l[a]
        
        //Create counter
        let j=a-1
        
        //Do cycle until temp will be last item
        while((j>=0)&(l[j]>temp)){
            l[j+1]=l[j]
            j-=1
        }
        
        //Give temp place
        l[j+1]=temp
    }
    return l
}

//Create ourList and run InsertSort
ourList=[5,2,7,3,8,1,4,5,9]
console.log(ShellSort(ourList))
    
