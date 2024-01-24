while True:
    valor1 = int(input("Digite o primeiro valor a ser calculado: "))
    calculo = input("Que tipo de conta vai ser feita(*, /, **, -, +...)? ")
    valor2 = int(input("Digite o segundo valor a ser calculado: "))

    resultado = eval(f"{valor1} {calculo} {valor2}")
    print(f"Seu resultado é {resultado}")
    continuar = int(input("Deseja continuar a calcular(1 - sim ou 0 - não)? "))

    if not continuar:
        print("Calculadora encerrada...")
        break