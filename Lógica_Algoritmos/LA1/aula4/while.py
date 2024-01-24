# São utilizadas para repetir passos até que o valor seja alterado ou rode por uma quantidade x de vezes
# EX: py .\calculadora.py

# while - quando não sabemos quantas vezes o loop irá repetir e a quantidade depende de uma condição
# i: int = 0
# while i < 3:  ((vai repetir enquanto i < 3))
#     print(f"Repetiu {i + 1} vezes")
#     i += 1

# soma = 0
# while True:
#     valor = int(input("Digite qualquer número para continuar, ou 0 para sair: "))

#     if not valor:
#         break
    
#     soma += valor
# print(f"A soma dos números digitados é {soma}.")
# print("Programa finalizado...")

for i in range(10):
    if i % 2 == 0: # se for par, recomeça o script
        continue
    print(i) # se for ímpar, aparece no TERMINAL