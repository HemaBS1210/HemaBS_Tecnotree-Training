import random

# List of words to choose from
words = ["apple", "banana", "cherry", "orange", "kiwi", "mango", "pear"]

# Function to choose a random word from the list
def choose_word(words):
    return random.choice(words)

# Function to display the secret word with underscores for each letter
def display_word(word, guessed_letters):
    displayed_word = ""
    for letter in word:
        if letter in guessed_letters:
            displayed_word += letter
        else:
            displayed_word += "_"
    return displayed_word

# Function to get a valid guess from the user
def get_guess(guessed_letters):
    while True:
        guess = input("Guess a letter: ").lower()
        if len(guess) != 1:
            print("Please enter a single letter.")
        elif guess in guessed_letters:
            print("You already guessed that letter. Try again.")
        elif not guess.isalpha():
            print("Please enter a letter.")
        else:
            return guess

# Main game function
def play_game():
    word = choose_word(words)
    guessed_letters = set()
    max_guesses = 6
    guesses = 0
    while True:
        print("Secret word:", display_word(word, guessed_letters))
        guess = get_guess(guessed_letters)
        guessed_letters.add(guess)
        if guess in word:
            print("Correct!")
            if display_word(word, guessed_letters) == word:
                print("Congratulations, you guessed the word!")
                break
        else:
            guesses += 1
            print("Incorrect.")
            if guesses == max_guesses:
                print("Sorry, you ran out of guesses. The word was", word)
                break

# Start the game
play_game()
