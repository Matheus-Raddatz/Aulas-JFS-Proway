package atividade2;

import java.util.List;

public class Atividade2 {

    public static void main(String[] args) {
        new CadastroContato().setVisible(true);
    }

    static void teste() {
        Contato c1 = new Contato("Jose", "jose@gmail.com", "(47)98765-9807");
        if (c1.salvar()) {
            System.out.println("Contato salvo com sucesso");
        }

        List<Contato> lista = c1.consultar();
        for (Contato ct : lista) {
            System.out.println(ct.toString());
        }
    }
}
