#takes a string
string = "Hello EveryOne"
# vowels
vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
result = ""

for i in range(len(string)):
    if string[i] not in vowels:
        result = result + string[i]
        
#returns a new string with all the vowels removed.
print("\nAfter removing Vowels: ", result)
