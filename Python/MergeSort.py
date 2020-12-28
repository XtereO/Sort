#MergeSort - Top3
def MergeSort(l):
    #Key recursive
    if len(l)==1:
        return l
    
    #Divide list on left and right side
    mid=len(l)//2
    left,right=l[:mid],l[mid:]
    
    #Do recursive
    return Merge(MergeSort(left),MergeSort(right))
    
def Merge(left,right):
    leftPointer,rightPointer=0,0
    result=[]
    
    #Do cycle until one of list give all elements
    while len(left)>leftPointer and len(right)>rightPointer:
        if left[leftPointer]>right[rightPointer]:
            result.append(right[rightPointer])
            rightPointer+=1
        else:
            result.append(left[leftPointer])
            leftPointer+=1
    
    #extend another elements
    if leftPointer==len(left):result.extend(right[rightPointer:])
    else:result.extend(left[leftPointer:])
    return result
    
#Create ourList and Check MergeSort
ourList=[2,6,7,12,64,23]
print(MergeSort(ourList))
    