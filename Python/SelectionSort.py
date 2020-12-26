#SelectionSort
def SelectionSort(l):
    for a in range(len(l)):
        #Take current id
        minId=a
        
        #Go throuw array to find min id
        for i in range(a,len(l)-1):
            if l[minId]>l[i+1]:
                minId=i+1
        
        #Swop midId and current Element
        l[a],l[minId]=l[minId],l[a]
    return l
ourList=[2,4,1,3,7,4,5]
print(SelectionSort(ourList))