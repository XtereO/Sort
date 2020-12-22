#ShackerSort
def ShackerSort(l):
    left=0
    right=len(l)
    while right>left:
        
        #Go from right side
        for a in range(left,right-1):
            if l[a]>l[a+1]:
                l[a],l[a+1]=l[a+1],l[a]
        right-=1
        
        #Go from left side
        for a in range(right,left,-1):
            if  l[a-1]>l[a]:
                l[a],l[a-1]=l[a-1],l[a]
        left+=1
    return l

#Create our List
ourList=[1,4,2,7,4,8,1,2,4,94,12]
print(ShackerSort(ourList))
