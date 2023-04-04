a=0
b=1
n=int(input("value of n: "))

print(a)
print(b)
for i in range (2,n):
    c=a+b
    print(c)
    a=b 
    b=c
    