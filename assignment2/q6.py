#Longest word
# Reads sentence 
sentence = input("Enter sentence: ")


# Finds longest word
longest = max(sentence.split(),key=len)


# Displaying longest word
print("Longest word is: ", longest)
print("And its length is: ", len(longest))