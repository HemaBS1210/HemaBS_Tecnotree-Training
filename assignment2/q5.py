#fuction common
def common(a, b):
    result = [i for i in a if i in b]
    #returns the longest word in the list.
    return result


#takes two lists of numbers 
a = [1, 2, 3,9, 4, 5]
b = [5, 6, 7, 8,1, 9]
 
print("The common elements in the two lists are: ")
print(common(a, b))