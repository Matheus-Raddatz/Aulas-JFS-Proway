"""
Regras de nomenclatura das variáveis:
- Não pode iniciar com símbolos (com exceção de _) ou números.
- Cada palavra deve ser separada por _.
- Os nomes das variáveis devem ser descritivos.
"""

nome_completo = "Matheus Raddatz" # str
vazio = None                      # NoneType
numero_inteiro = 250              # int
numero_decimal = 20.2             # float
presente = True                   # bool


print(f"O meu nome é {nome_completo} ...") # O meu nome é Matheus Raddatz ...
print(vazio)                               # None
print(numero_inteiro)                      # 250
print(numero_decimal)                      # 20.2
print(presente)                            # True


print(type(nome_completo))  # <class 'str'>
print(type(vazio))          # <class 'NoneType'>
print(type(numero_inteiro)) # <class 'int'>
print(type(numero_decimal)) # <class 'float'>
print(type(presente))       # <class 'bool'>


# criar diversas variáveis ao mesmo tempo
a, b, c = 1, 2, 3

# trocar valores entre variáveis
a = 10      # a=10 b=None aux=None
b = 5       # a=10 b=5    aux=None
aux = a     # a=10 b=5    aux=10
a = b       # a=5  b=5    aux=10
b = aux     # a=5  b=10   aux=10
print(a, b) # 5 10

c = 10
d = 5
c, d = d, c
print(c, d)

# arredondar casas decimais
valor_com_muitas_casas_decimais = 10.1237918273918273812
print(f"O valor formatado é: {valor_com_muitas_casas_decimais:.2f}")