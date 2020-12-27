#GnomSort
def GnomSort(l):
    i=0
    while i<len(l)-1:
        #Check on Okay position
        if i<0 or l[i+1]>=l[i]:i+=1
        
        #Do swop if not Okay
        else:
            l[i],l[i+1]=l[i+1],l[i]
            i-=1
    return l

#Create ourList and check GnomSort
ourList=[2,6,1,8,4,5,6,3]
print(GnomSort(ourList))