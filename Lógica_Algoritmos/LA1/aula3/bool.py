verdadeiro = True
falso = False

print(bool(1))
print(bool(0))
print(bool(10))
print(bool(-10))
print(bool(10.23))
print(bool(0.23))
print(bool(0.0))
print(bool("a"))
print(bool("0"))
print(bool(""))

valor = "" # valor False

if not valor: # valor True
    print("Você não digitou um valor.")
# ou
if valor == "":
    print("Você não digitou um valor.")