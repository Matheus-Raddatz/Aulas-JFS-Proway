alunos = []
def busca_aluno(matricula: int) -> int:
    indice = -1
    for i, aluno in enumerate(alunos):
        if aluno[0] == matricula:
            indice = i
            break
    return indice

def media_f(nota1: int, nota2: int, nota3: int) -> float:
    return (nota1 + nota2 + nota3) / 3

def cadastro(matricula: int, nome: str):
    alunos.append([matricula, nome])
while True:
    escolha = int(input(
    """
    1) Cadastrar aluno
    2) Editar informações do aluno
    3) Cadastrar notas de um aluno
    4) Listar alunos
    0) Sair
    Escolha: """))
    if escolha == 0:
        print("Programa encerrado")
        break
    elif escolha == 1:
        cadastro(int(input("Digite a matrícula do aluno: ")), input("Digite o nome do aluno: "))
        print(alunos)
    elif escolha == 2:
        indice_aluno = busca_aluno(int(input("Digite a matrícula do aluno: ")))
        if indice_aluno >= 0:
            print(alunos[indice_aluno])
            alunos[indice_aluno][1] = input("Qual é o novo nome? ")
            print(alunos)
    elif escolha == 3:
        indice_aluno = busca_aluno(int(input("Digite a matrícula do aluno: ")))
        if indice_aluno >= 0:
            nota1 = float(input("Digite a primeira nota: "))
            nota2 = float(input("Digite a segunda nota: "))
            nota3 = float(input("Digite a terceira nota: "))
            media = media_f(nota1, nota2, nota3)
            alunos[indice_aluno].append(nota1)
            alunos[indice_aluno].append(nota2)
            alunos[indice_aluno].append(nota3)
            alunos[indice_aluno].append(media)
    elif escolha == 4:
        print(alunos)
    else:
        print("Valor inválido")