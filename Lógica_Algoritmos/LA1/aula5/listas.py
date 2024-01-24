'''
Os vetor pode ser considerado uma variável que armazena várias variáveis.
Imagine que você precisa criar um programa que leia o nome de 50 pessoas.
Sem os vetores teríamos que criar 50 variáveis diferentes:
    nome_aluno_1, nome_aluno_2, nome_aluno_3...
E para mostrar o nome de cada aluno cadastro teríamos que printar cada variável
individualmente:
    print(nome_aluno_1)
    print(nome_aluno_2)
    print(nome_aluno_3)...
Já da para perceber que esse processo é muito trabalhoso e demorado. Nesse caso
podemos utilizar um vetor para armazenar todos esses nomes.
Em python os vetores são chamados de listas.
'''

# Criando uma lista em Python
lista = []

# Criando uma lista com elementos
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numeros)
print(type(numeros))

# Podemos adicionar vários tipos diferentes de dado em um vetor
varios_tipos = ["a", 1, True, 10.2, None]
print(varios_tipos)

# Para acessar um item em especifíco do vetor é necessário informar o índice:
# *OBS*:Os índices de um vetor sempre começam com 0, portanto um vetor com
# 5 itens vai ter os índices: 0, 1, 2, 3, 4.
print(varios_tipos[2])

# Para mostrar o último elemento do vetor
print(varios_tipos[-1])

# Para modificar um item no vetor
varios_tipos[0] = "b"
print(varios_tipos)

# Para saber o tamanho de um vetor
print(len(varios_tipos))

# Iterar sobre um vetor
for numero in numeros:
    print(numero)

# Se for necessário alterar o valor de uma posição do vetor durante a iteração
for indice, numero in enumerate(numeros):
    if numero % 2 == 0:
        numeros[indice] = -1

print(numeros)

# Para adicionar um elemento ao final da lista
nomes = ["João", "Maria"]
nomes.append("Pedro")
print(nomes)

# Para remover o último elemento da lista
nomes.pop()
print(nomes)

# Para remover um elemento através do índice
nomes.pop(0)
print(nomes)

# Para iterar em uma lista de maneira reversa
for numero in reversed(numeros):
    print(numero)

print(numeros)

for indice in range(len(numeros) -1, 0, -1):
    print(numeros[indice])

for numero in numeros[::-1]:
    print(numero)

# Para transformar uma string em vetor
frase = "Olá mundo"
fraseEmVetor = frase.split(" ")
print(fraseEmVetor)

# Para transformar um vetor em string
novaFrase = " ".join(fraseEmVetor)
print(novaFrase)