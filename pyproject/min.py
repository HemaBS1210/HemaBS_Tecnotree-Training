import tkinter as tk

# create the root window and set it to withdraw

root = tk.Tk()
root.withdraw()

# create the student management system window

win = tk.Tk()
win.geometry("1350x700+0+0")


# start the event loop for the student management system window


title_label = tk.Label(win, text="Student Mangement System", font=("Arial",25),border=12,relief=tk.GROOVE)
title_label.pack(side=tk.TOP,fill=tk.X)

win.mainloop()

