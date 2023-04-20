from tkinter import *
from tkinter import messagebox
from PIL import ImageTk


def login():
    if usernameEntry.get() == '' or passwordEntry.get() == '':
        messagebox.showerror('Error', 'Fields cannot be empty')
    elif usernameEntry.get() == 'root' and passwordEntry.get() == 'Root':
        messagebox.showinfo('Success', 'Welcome')

    else:
        messagebox.showerror('Error', 'Please enter correct credentials')


window = Tk()

window.geometry('1280x700+0+0')

# window.resizable(False,False)

backgroundImage = ImageTk.PhotoImage(
    file="C:\\Users\\shekahe\\OneDrive - Tecnotree\\Desktop\\student manegment system\\Student Management System\\bg.jpg")

window.title("Student Management System")
bgLabel = Label(window, image=backgroundImage)
bgLabel.place(x=0, y=0)

loginFrame = Frame(window, bg='grey')
loginFrame.place(x=400, y=150)

logoImage = PhotoImage(
    file="C:/Users/shekahe/OneDrive - Tecnotree/Desktop/student manegment system/Student Management System/logo.png")

logoLabel = Label(loginFrame, image=logoImage)
logoLabel.grid(row=0, column=0, columnspan=2, pady=10)
usernameImage = PhotoImage(
    file="C:\\Users\\shekahe\\OneDrive - Tecnotree\\Desktop\\student manegment system\\Student Management System\\user.png")

usernameLabel = Label(loginFrame, image=usernameImage, text='Username',
                      compound=LEFT, font=('Futura', 20, 'bold'), bg='white')
usernameLabel.grid(row=1, column=0, pady=10, padx=20)

usernameEntry = Entry(loginFrame, font=(
    'Futura', 20, 'bold'), bd=5, fg='#000000')
usernameEntry.grid(row=1, column=1, pady=10, padx=20)

passwordImage = PhotoImage(
    file="C:\\Users\\shekahe\\OneDrive - Tecnotree\\Desktop\\student manegment system\\Student Management System\\password.png")
passwordLabel = Label(loginFrame, image=passwordImage, text='Password',
                      compound=LEFT, font=('Futura', 20, 'bold'), bg='white')
passwordLabel.grid(row=2, column=0, pady=10, padx=20)

passwordEntry = Entry(loginFrame, font=(
    'Futura', 20, 'bold'), bd=5, fg='#000000')
passwordEntry.grid(row=2, column=1, pady=10, padx=20)

loginButton = Button(loginFrame, text='Login', font=('Futura', 14, 'bold'), width=15, fg='white', bg='darkgrey', activebackground='cornflowerblue',
                     activeforeground='white', cursor='hand2', command=login)
loginButton.grid(row=3, column=1, pady=10)

window.mainloop()
