from Page1.helpers import *

def fat_recursivo(n):
    if n == 0:
        return 1
    else:
        return n * fat_recursivo(n-1)

def entrada_saida():
    n = int(input("Digite o valor para fazer o fatorial: "))
    print(fat_recursivo(n))

continuar(entrada_saida)