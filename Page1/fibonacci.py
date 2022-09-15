from Page1.helpers import *

def fibonacci():

    n = int(input("Digite um valor para 'n':"))
    num1 = 1
    num2 = 1
    total = 0
    lista = [1,1]

    if n == 0:
        print("Digite um valor maior que 0!")
    elif n == 1:
        print(1)
    else:
        for i in range(n-2):
            total = num1 + num2
            num1 = total
            num2 = total - num2
            lista.append(total)

        print("".join(c for c in str(lista) if c not in [ "[", "]" ]))


continuar(fibonacci)