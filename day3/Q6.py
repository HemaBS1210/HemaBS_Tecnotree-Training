def print_board(board):
    """Prints the current state of the board"""
    for row in board:
        print("|".join(row))

def check_winner(board):
    """Checks if there is a winner"""
    # Check rows
    for row in board:
        if len(set(row)) == 1 and row[0] != "":
            return row[0]
    # Check columns
    for i in range(3):
        if len(set([board[j][i] for j in range(3)])) == 1 and board[0][i] != "":
            return board[0][i]
    # Check diagonals
    if len(set([board[i][i] for i in range(3)])) == 1 and board[0][0] != "":
        return board[0][0]
    if len(set([board[i][2-i] for i in range(3)])) == 1 and board[0][2] != "":
        return board[0][2]
    return None

def play_game():
    """Main function to play the game"""
    board = [["", "", ""], ["", "", ""], ["", "", ""]]
    player = "X"
    while True:
        print_board(board)
        row = int(input(f"Player {player}, choose a row (1-3): ")) - 1
        col = int(input(f"Player {player}, choose a column (1-3): ")) - 1
        if board[row][col] != "":
            print("That position is already taken!")
            continue
        board[row][col] = player
        winner = check_winner(board)
        if winner is not None:
            print_board(board)
            print(f"Player {winner} wins!")
            break
        if all([all(row) for row in board]):
            print_board(board)
            print("It's a tie!")
            break
        player = "O" if player == "X" else "X"

play_game()
