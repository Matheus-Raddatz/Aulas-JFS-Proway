# exercício 1
def invalido():
    print("Valor inválido")
def final():
    print(f"O primeiro valor é {primeiro} e o último é {ultimo}")

lista = []
while True:
    valor = int(input("Digite um valor ou 0 para parar: "))
    if valor == 0:
        invalido
        break
    lista.append(valor)
    primeiro = lista[0]
    ultimo = lista[-1]
    final