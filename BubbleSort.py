def BubbleSort(l):
    length=len(l)
    for a in range(length):
        for i in range(length-1-a):
           if l[i]>l[i+1]:
                l[i],l[i+1]=l[i+1],l[i]
    return l
l=[2,1,5,6,2,3]
print(BubbleSort(l))
