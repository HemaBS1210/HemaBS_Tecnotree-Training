import time

def calculate_time(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Time taken to execute {func.__name__}: {end_time-start_time} seconds")
        return result
    return wrapper

#calculate_time
def my_function():
    time.sleep(5)
    print("Function executed.")

my_function()
