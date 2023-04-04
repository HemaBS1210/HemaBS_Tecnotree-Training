import random

questions = [
    {
        "question": "What is the capital of France?",
        "options": ["London", "Paris", "Madrid", "Berlin"],
        "answer": "Paris"
    },
    {
        "question": "Who wrote 'Pride and Prejudice'?",
        "options": ["Jane Austen", "Emily Bronte", "Charlotte Bronte", "Virginia Woolf"],
        "answer": "Jane Austen"
    },
    {
        "question": "What is the largest mammal in the world?",
        "options": ["Elephant", "Giraffe", "Hippopotamus", "Blue Whale"],
        "answer": "Blue Whale"
    }
]

score = 0
num_questions = 3

random.shuffle(questions)

for i in range(num_questions):
    print("Question {}: {}".format(i+1, questions[i]["question"]))
    for j in range(len(questions[i]["options"])):
        print("{}. {}".format(j+1, questions[i]["options"][j]))
    user_answer = input("Enter your answer (1-{}): ".format(len(questions[i]["options"])))
    if questions[i]["options"][int(user_answer)-1] == questions[i]["answer"]:
        print("Correct!")
        score += 1
    else:
        print("Incorrect!")
    
print("Final Score: {}/{}".format(score, num_questions))
