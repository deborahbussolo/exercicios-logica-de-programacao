def continuar(funcao):
    r = "S"
    while r == "S" or r=="s":
        #Logica
        funcao()
        r = input("\nDeseja usar o programa novamente? [S/N]").upper()[0]
        r = restricao(r, ["S", "N"], "Resposta inválida, tente novamente! \nDeseja Continuar? [S/N] ")     
        if r == "N":
            print("Programa encerrado!\n")
            break

def restricao(r, permitidas, mensagem):
    if isinstance(permitidas, list):
        while r.upper() not in permitidas:
            r = input(mensagem)[0]
    else:
        while not isinstance(r, permitidas):
            r = input(mensagem)[0]
    return r

