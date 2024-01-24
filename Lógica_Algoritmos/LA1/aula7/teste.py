def soma(v1: int, v2: int) -> int:
    return v1 + v2

def multiplicacao(v1: int, v2: int) -> int:
    return v1 * v2

def subtracao(v1: int, v2: int) -> int:
    return v1 - v2

def divisao(v1: int, v2: int) -> float:
    return v1 / v2

print(divisao(int(input("Digite o 1º valor: ")), int(input("Digite o 2º valor: "))))
print(subtracao(int(input("Digite o 1º valor: ")), int(input("Digite o 2º valor: "))))
print(multiplicacao(int(input("Digite o 1º valor: ")), int(input("Digite o 2º valor: "))))
print(soma(int(input("Digite o 1º valor: ")), int(input("Digite o 2º valor: "))))