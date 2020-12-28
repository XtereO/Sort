#RadixSort
def CreateBasket():
    l=[]
    for a in range(10):
        l.append([])
    return l
def RadixSort(l):
    i=0
    while True:
        step=10**i
        
        #Create and Fill basket
        basket=CreateBasket()
        for a in l:
            CurEl=a//step
            CurId=CurEl%10
            basket[CurId].append(a)
        
        #CheckOnZero
        if basket[0]==l:
            return l
        
        #RealeaseBasket
        l=[]
        for a in range(10):
            for b in basket[a]:
                l.append(b)
        i+=1

#Create ourList and check RadixSort
ourList=[3,53,12,43,23,74,122,32,17]
print(RadixSort(ourList))
        
            