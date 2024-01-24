# if = cria uma condição
# elif = cria uma segunda condição após o if
# else = determina o que fazer caso nenhuma condição seja atendida
valor = int(input("Digite um valor de 0 a 20: "))
if valor > 10:
    print("O valor é maior que 10")
elif valor < 10:
    print("O valor é menor que 10")
else:
    print("O valor é igual a 10")

# operador ternário
numero = 10
print("O número é maior que 10") if numero > 10 else print("O número é menor ou igual a 10")

# tabela verdade
"""
Negação
p | q | p and q    p | q | p or q
V | V | V          V | V | V
V | F | F          V | F | V
F | V | F          F | V | V
F | F | F          F | F | F
"""
numero = 11
if numero > 10 and numero < 90:
    print("O número está entre 10 e 90")
else:
    print("O número não está entre 10 e 90")

# escopo de variaveis
numero2 = 10
if 1 < 10:
    numero2 = 20
    print("Entrou no IF porquê 1 < 10")
print(numero2)