function CreateBasket(){
    let l=[];
    for(let i=0;i<10;i++){
        l.push([])
    }
    return l;
}
function RadixSort(l){
    let i=0;
    while(true){
        let step=Math.pow(10,i);

        //CreateBasket and Fill
        let basket=CreateBasket()
        for(let a=0;a<l.length;a++){
            let CurEl=Math.floor(l[a]/step);
            let CurId=CurEl%10;
            basket[CurId].push(l[a]);
        }
        
        //CheckOnZero
        if(l.length==basket[0].length){
            return l;
        }
        
        //RealeseBasket
        l=[]
        for(let a=0;a<10;a++){
            for(let b=0;b<basket[a].length;b++){
                l.push(basket[a][b]);
            }
        }
        i++;
    }
}

//Create ourList and Check RadixSort
let ourList=[123,67,1,2,3456,64,24]
console.log(RadixSort(ourList))