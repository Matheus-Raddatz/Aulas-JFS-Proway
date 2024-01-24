# exercício 1
# for i in range(10):
#     print(f"{i + 1}.Hello world")
#     i += 1
# i = 0
# while i < 10:
#     print(f"{i + 1}.Hello world")
#     i += 1

# exercício 2
# i = 0
# while not i >= 10:
#     print(f"Estou aparecendo pela {i + 1}ª vez na tela!")
#     i += 1

# exercício 3
# for i in range(10, 0, -1):
#     print(i)
# print ("FIM!")

# while i < 10:
#     print(f"Estou aparecendo pela {i + 1}ª vez na tela!")
#     i += 1

# for i in range(10):
#     print(f"Estou aparecendo pela {i + 1}ª vez na tela!")
#     i += 1

# exercício 6
# valor1 = int(input("Qual é o primeiro valor? "))
# valor2 = int(input("Qual é o segundo valor? "))
# valor3 = int(input("Qual é o terceiro valor? "))
# valor4 = int(input("Qual é o quarto valor? "))
# valor5 = int(input("Qual é o quinto valor? "))
# soma = valor1 + valor2 + valor3 + valor4 + valor5
# media = soma / 5
# print(f"A soma dos valores é {soma:.2F} e a média deles é {media:.2F}")

# exercício 7
# N = int(input("Digite um valor positivo: "))
# i = 1
# print(f"Todos os valores ímpares até {N} são:")
# while i <= N:
#     if N <= 0:
#         break
#     print(i)
#     i += 2

# exercício 9
# valores = 0
# contador = 0
# while valores < 5:
#     valor = int(input("Digite um valor: "))
#     valores += 1
#     if valor < 0:
#         contador += 1
#     if valor >= 0:
#         continue
# print(f"Dos valores digitados, {contador} são negativos")

# exercício 16
# valores = 0
# while valores < 5:
#     if valores == 0:
#         valor1 = int(input("Digite um valor: "))
#         valor2 = valor1
#         valores += 1
#         continue
#     valor = int(input("Digite um valor: "))
#     valores += 1
#     if valor > valor1:
#         valor1 = valor
#     if valor < valor2:
#         valor2 = valor
# print(f"O menor valor digitado é {valor2} e o maior é {valor1}")