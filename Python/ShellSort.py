#ShellSort
def ShellSort(l):
    
    #TakeStep
    step=len(l)//2
    
    while (step>0):
        for a in range(len(l)-step):
            #Compare "a" elment and "a+step" 
            if l[a]>l[a+step]:
                l[a],l[a+step]=l[a+step],l[a]
        step=step//2
    
    #InsertSort
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
print(ShellSort(ourList))