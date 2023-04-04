def prime_finder(nnew):
  prime_list = []
  for num in range(2, new+1):
      for i in range(2, num):
        if num % i == 0:
          break   
      else:
        prime_list.append(num)
  return prime_list

n=input("enter a string")
new=n.split()
print(new)