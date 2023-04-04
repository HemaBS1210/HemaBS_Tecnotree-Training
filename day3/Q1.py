# import os

# def clear_screen():
#     os.system('cls' if os.name == 'nt' else 'clear')

# def display_menu():
#     clear_screen()
#     print("Todo List App")
#     print("=" * 20)
#     print("1. View Todo List")
#     print("2. Add Item to Todo List")
#     print("3. Update Item on Todo List")
#     print("4. Remove Item from Todo List")
#     print("5. Exit")

# def get_todo_list():
#     todo_list = []

#     if not os.path.exists("todo.txt"):
#         open("todo.txt", "w").close()

#     with open("todo.txt", "r") as file:
#         lines = file.readlines()

#     for line in lines:
#         todo_list.append(line.strip())

#     return todo_list

# def view_todo_list():
#     todo_list = get_todo_list()

#     if not todo_list:
#         print("Your todo list is empty.")
#     else:
#         print("Your todo list:")
#         for item in todo_list:
#             print(item)

# def add_todo_item():
#     item = input("Enter new todo item: ")
#     with open("todo.txt", "a") as file:
#         file.write(item + "\n")
#     print(f"{item} added to todo list.")

# def update_todo_item():
#     todo_list = get_todo_list()

#     if not todo_list:
#         print("Your todo list is empty.")
#     else:
#         print("Your todo list:")
#         for index, item in enumerate(todo_list):
#             print(f"{index + 1}. {item}")

#         choice = int(input("Which item would you like to update? ")) - 1
#         new_item = input("Enter new item: ")

#         todo_list[choice] = new_item

#         with open("todo.txt", "w") as file:
#             for item in todo_list:
#                 file.write(item + "\n")

#         print("Todo item updated.")

# def remove_todo_item():
#     todo_list = get_todo_list()

#     if not todo_list:
#         print("Your todo list is empty.")
#     else:
#         print("Your todo list:")
#         for index, item in enumerate(todo_list):
#             print(f"{index + 1}. {item}")

#         choice = int(input("Which item would you like to remove? ")) - 1
#         item = todo_list.pop(choice)

#         with open("todo.txt", "w") as file:
#             for item in todo_list:
#                 file.write(item + "\n")

#         print(f"{item} removed from todo list.")

# while True:
#     display_menu()
#     choice = input("Enter your choice: ")

#     if choice == "1":
#         view_todo_list()
#         input("Press Enter to continue...")
#     elif choice == "2":
#         add_todo_item()
#         input("Press Enter to continue...")
#     elif choice == "3":
#         update_todo_item()
#         input("Press Enter to continue...")
#     elif choice == "4":
#         remove_todo_item()
#         input("Press Enter to continue...")
#     elif choice == "5":
#         clear_screen()
#         print("Goodbye!")
#         break
#     else:
#         input("Invalid choice. Press Enter to continue...")


#Todo List programme

items = []

while True:
    action = input("Enter 'add' to add a new item, 'remove' to remove an item, 'view' to view the list, or 'exit' to quit: ")

    if action == "add":
        item = input("Enter the item to add: ")
        items.append(item)
        print("Item added to the list.")
    elif action == "remove":
        if not items:
            print("The list is empty.")
        else:
            index = int(input("Enter the index of the item to remove: "))
            if index < 1 or index > len(items):
                print("Invalid index.")
            else:
                removed_item = items.pop(index-1)
                print(f"{removed_item} removed from the list.")
    elif action == "view":
        if not items:
            print("The list is empty.")
        else:
            print("Todo list:")
            for i, item in enumerate(items, start=1):
                print(f"{i}. {item}")
    elif action == "exit":
        break
    else:
        print("Invalid action.")