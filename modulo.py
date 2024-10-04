def modulo(n):
    if n % 2 == 0:
        return "c'est un nombre pair"
    else: 
        return "c'est un nombre impair"

print(modulo(5))


""" adding fibonacci in python """

def fibonacci(n):
    if n == 0:
        return [0];
    if n == 1:
        return [0, 1];

    a, b = 0, 1;
    fibonacciArray = [a, b]

    for i in range(2, n+1):
        temp = a + b;
        a = b;
        b = temp
        fibonacciArray.append(b);

    return fibonacciArray;

print(fibonacci(8));