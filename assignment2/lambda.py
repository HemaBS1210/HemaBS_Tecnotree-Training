my_list = [-1,0,1, 2, 3, 4, 5, 6, 7, 8, 9]

filtered_list = list(map(lambda x: x*2, filter(lambda x: x%2==0, my_list)))

print(filtered_list)
