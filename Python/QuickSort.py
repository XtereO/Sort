#QuickSort-Top2
from random import choice
def QuickSort(l):
    #Recursive Key
    if len(l)<=1:
        return l
        
    #Divide list on thre other list
    litle,equal,large=[],[],[]
    pivot=choice(l)
    for a in l:
        if pivot>a:litle.append(a)
        elif pivot<a:large.append(a)
        else:equal.append(a)
    
    #Do recursive
    return QuickSort(litle)+equal+QuickSort(large)

#Create ourList and check QuickSort
ourList=[5,23,65,32,12,34,86,43]
print(QuickSort(ourList))