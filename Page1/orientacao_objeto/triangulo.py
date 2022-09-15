from Page1.helpers import *

class Triangulo():
    def __init__(self, lado1, lado2, lado3):
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3
        self.tipo()

    def tipo(self):
        if self.isequilatero() == True:
            return "Equilatero"
        elif self.isescaleno() == True:
            return "Escaleno"
        elif self.isisosceles() == True:
            return "Isóceles"

    def isequilatero(self):
        return self.lado1 == self.lado2 and self.lado2 == self.lado3

    def isescaleno(self):
        return self.lado1 != self.lado2 and self.lado2 != self.lado3 and self.lado1 != self.lado3

    def isisosceles(self):
        return not self.isequilatero() and not self.isescaleno()

def lados_triangulo():

    lado1, lado2, lado3= [float(x) for x in input("Digite o valor de cada lado do triangulo, dividido por um espaço! Exemplo: 2 3 4\nR:").split()][0:3]
    print(Triangulo(lado1, lado2, lado3).tipo())
    
continuar(lados_triangulo)