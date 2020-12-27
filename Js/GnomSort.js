//GnomSort
function GnomSort(l){
    let i=0;
    while(i<l.length-1){
        //Check on Okay
        if((i<0) || (l[i+1]>=l[i])){
            i++;
        }
        
        //Do swop if not Okay
        else{
            let t=l[i];
            l[i]=l[i+1];
            l[i+1]=t;
            i--;
        }
    }
    return l;
}

//Create ourList and check CnomSort
let ourList=[3,5,7,1,3,8,4,2];
console.log(GnomSort(ourList))