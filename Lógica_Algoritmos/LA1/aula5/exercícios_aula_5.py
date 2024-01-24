# '''
# Faça um programa que leia e monte dois vetores de números inteiros com 3 números cada. Depois
# de montados gere um terceiro vetor formado pela diferença dos dois vetores lidos, um quarto vetor
# formado pela soma dos dois vetores lidos e por último um quinto vetor formado pela multiplicação
# dos dois vetores lidos.
# '''
# vetor1, vetor2, vetor_diferenca, vetor_soma, vetor_multiplicacao = [], [], [], [], []
# for i in range(3):
#     vetor1.append(int(input(f"Digite o {i + 1}º número do vetor 1: ")))
#     vetor2.append(int(input(f"Digite o {i + 1}º número do vetor 2: ")))
#     vetor_diferenca.append(vetor1[i] - vetor2[i])
#     vetor_soma.append(vetor1[i] + vetor2[i])
#     vetor_multiplicacao.append(vetor1[i] * vetor2[i])

# print(f"Vetor 1: {vetor1}")
# print(f"Vetor 2: {vetor2}")
# print(f"Vetor Diferença: {vetor_diferenca}")
# print(f"Vetor Soma: {vetor_soma}")
# print(f"Vetor Multiplicação: {vetor_multiplicacao}")

# exercício 1
# valores = []
# for i in range(10):
#     valor = int(input(f"Digite o {i + 1}º valor: "))
#     if valor % 2 == 0:
#         valores.append(valor)
# print(len(valores))

# exercício 2
# numeros = []
# posicao = 0
# for i in range(5):
#     numero = int(input(f"Digite o {i + 1}º número: "))
#     numeros.append(numero)
#     if i == 0:
#         maior = numero
#     elif numero > maior:
#         maior = numero
#         posicao = i
# print(numeros)
# print(f"O maior valor é {maior} e ele é o {posicao + 1}º valor da lista.")

# exercício 3
# numeros = []
# for i in range(5):
#     numero = int(input(f"Digite o {i + 1}º número: "))
#     numeros.append(numero)
#     if i == 0:
#         maior = numero
#         menor = numero
#     elif numero > maior:
#         maior = numero
#     elif numero < menor:
#         menor = numero
# print(numeros)
# print(f"O maior valor da lista é: {maior}")
# print(f"O menor valor da lista é: {menor}")

# exercício 4
# valores = []
# for i in range(5):
#     valor = int(input(f"Digite o {i + 1}º valor: "))
#     valores.append(valor)

# for valor in valores[::-1]:
#     print(valor)

# exercício 5
# nomes = []
# for i in range(5):
#     nome = input(f"Digite o {i + 1}º nome: ")
#     nomes.append(nome)
# nome2 = input("Digite um nome qualquer: ")
# if nome2 in nomes:
#     print("ACHEI")
# else:
#     print("NÃO ACHEI")

# exercício 10
# valoresPOS = []
# valoresNEG = []
# for i in range(10):
#     valor = int(input(f"Digite o {i + 1}º valor: "))
#     if valor < 0:
#         valoresNEG.append(valor)
#     if valor > 0:
#         valoresPOS.append(valor)
# print(len(valoresNEG))
# somaPOS = sum(valoresPOS)
# print(somaPOS)

# exercício 14
# lista1 = []
# lista2 = []
# for i in range(5):
#     lista_1 = input(f"Digite o {i + 1}º valor da lista 1: ")
#     lista1.append(lista_1)
# print("\n")
# for i in range(5):
#     lista_2 = input(f"Digite o {i + 1}º valor da lista 2: ")
#     lista2.append(lista_2)

# if lista1 == lista2:
#     print("As listas são iguais")
# else:
#     print("As listas são diferentes")

# exercício 15
# valores1 = []
# valores2 = []
# valores3 = []
# for i in range(5):
#     valor1 = input(f"\nDigite o {i + 1}º valor da lista 1: ")
#     valores1.append(valor1)
#     valor2 = input(f"Digite o {i + 1}º valor da lista 2: ")
#     valores2.append(valor2)
#     if valor1 == valor2:
#         valores3.append(valor1)
# print(valores1)
# print(valores2)
# print(valores3)

# exercício 16
# numero1 = int(input("Digite o primeiro valor: "))
# numero2 = int(input("Digite o segundo valor: "))
# for i in range(numero1, numero2, 2):
#     print(i)