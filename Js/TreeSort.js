class Node{
    constructor(value){
        this.value=value;
        this.left="None";
        this.right="None";
    }
}

class BinaryTree{
    constructor(){
        this.root="None";
    }
    AddNode(curNode,value){
        if(this.root=="None"){
            this.root=new Node(value);
        }
        else if(curNode.value>value){
            if(curNode.left=="None"){
                curNode.left=new Node(value);
            }
            else{
                return this.AddNode(curNode.left,value);
            }
        }
        else{
            if(curNode.right=="None"){
                curNode.right=new Node(value);
            }
            else{
                return this.AddNode(curNode.right,value)
            }
        }
    }
    inOrder(curNode){
        let l=[]
        if(curNode.left!="None"){
            l.push(...this.inOrder(curNode.left));
        }
        
        l.push(curNode.value);
        
        if(curNode.right!="None"){
            l.push(...this.inOrder(curNode.right));
        }
        
        return l
    }
    TreeSort(l){
        let result=[]
        for(let i=0;i<l.length;i++){
            this.AddNode(this.root,l[i]);
        }
        return this.inOrder(this.root);
    }
}

let FillTree=(tree)=>{
    for(let i=0;i<10;i++){
        tree.AddNode(tree.root,Math.floor(Math.random()*100))
    }
    return tree
}

let tree=new BinaryTree();
l=[32,42,12,45,75,32,14,82];

l=tree.TreeSort(l);
console.log(l)