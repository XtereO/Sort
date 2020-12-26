#InsertSort
def InsertSort(l):
    for a in range(1,len(l)):
        #Take last item
        temp=l[a]
        
        #Do new counter
        j=a-1
        
        #Do cycle until temp will be most litle
        while j>=0 and temp<l[j]:
            l[j+1]=l[j]
            j-=1
        
        #Give temp place  
        l[j+1]=temp
    return l

#Create ourList and run our Sort
ourList=[2,5,1,3,5,9,7,8,4,2]
print(InsertSort(ourList))