from Page1.helpers import *

def fatorial():
    fatorial = int(input("Digite um námero para acalcular o seu fatorial:"))
    total = 1
    cont = 1
    lista = []
    for i in range(fatorial):
        total *= cont
        cont += 1
        lista.append(i+1)
    
    print("\n","".join(c for c in str(lista[::-1]) if c not in [ "[", "]", " " ]).replace(",","x"))
    print("total:", total)

continuar(fatorial)
