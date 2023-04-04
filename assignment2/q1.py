# list of numbers
num_list = input("Enter a list of numbers separated by space: ").split()  # ask user to enter a list of numbers and split them into a list
# initilize
even_sum = 0
for num in num_list:
    if int(num) % 2 == 0:  
        # suming result
        even_sum += int(num)  
# prints only even number sum
print("The sum of even numbers in the list is:", even_sum)
