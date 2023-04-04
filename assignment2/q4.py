# a list of numbers
list1=[1,2,4,3,7,9,8]


# returns the median value.
list1.sort()
if len(list1) % 2 !=0:
    m=int(((len(list1)+1)/2)-1)
    print(m)
else:
    m1 = int(len(list1)/2 - 1)
    m2 = int(len(list1)/2 )
    m3=(list1[m1]+list1[m2])/2
    print(m3)