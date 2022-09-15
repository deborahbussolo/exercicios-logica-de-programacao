from Page1.helpers import *

def texto_invertido():
    lista = []
    texto = input("Digite seu texto aqui:")
    for caracter in range(len(texto), 0, -1):
        
        lista.append(texto[caracter-1])

    print("".join(c for c in str(lista) if c not in [ "[", "]", "'","'", ","]))

continuar(texto_invertido)

#print(texto[::-1])