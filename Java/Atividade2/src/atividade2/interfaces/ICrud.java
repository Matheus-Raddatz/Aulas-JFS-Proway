package atividade2.interfaces;

import atividade2.Contato;
import java.util.List;

public interface ICrud {
    public boolean salvar();
    public boolean alterar(int id);
    public void excluir(int id);
    public Contato consultar(int id);
    public List<Contato> consultar();
}
