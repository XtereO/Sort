from random import randint

class Node():
    def __init__(self,value):
        self.value=value
        self.right="None"
        self.left="None"

class BinaryTree():
    root="None"
    def AddNode(self,value,curNode):
        if self.root=="None":
            self.root=Node(value)
            curNode=self.root
            return "pass"
            print(curNode.value)
        
        elif curNode.value>=value:
            if curNode.left=="None":
                curNode.left=Node(value)
            else:
                self.AddNode(value,curNode.left)
        
        else:
            if curNode.right=="None":
                curNode.right=Node(value)
            else:
                self.AddNode(value,curNode.right)
    
    def inOrder(self,curNode):
        l=[]
        if curNode.left!="None":
            self.inOrder(curNode.left)
            l.extend(self.inOrder(curNode.left))
        
        l.append(curNode.value)
        #print(curNode.value)
        
        if curNode.right!="None":
            self.inOrder(curNode.right)
            l.extend(self.inOrder(curNode.right))
        
        return l
        
    def FillTree(self):
        for a in range(10):
            self.AddNode(randint(10,10000),self.root)
            
    def TreeSort(self,l):
        for a in l:
            self.AddNode(a,self.root)
        return self.inOrder(self.root)
    
    
tree=BinaryTree()
l=[23,41,23,65,76,46,97,53]
l=tree.TreeSort(l)
print(l)
        
        
        
        
        