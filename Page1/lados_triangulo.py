from Page1.helpers import *

def lados_triangulo():
    
    a, b, c= [int(x) for x in input("Digite o valor de cada lado do triangulo, dividido por um espaço! Exemplo: 2 3 4\nR:").split()][0:3]
    if a == 0 or b == 0 or c == 0:
        print("Digite valores maiores que 0!")
    else:
        if a == b and b == c:
            print("Os valores correspondem a um Triangulo Equilatero")
        elif a != b and b != c and a != c:
            print("Os valores correspondem a um Triangulo Escaleno")
        else:
            print("Os valores correspondem a um Triangulo Isósceles")

continuar(lados_triangulo)
    