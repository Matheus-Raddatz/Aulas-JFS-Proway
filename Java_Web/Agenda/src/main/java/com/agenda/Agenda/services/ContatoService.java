package com.agenda.Agenda.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agenda.Agenda.entidades.Contato;
import com.agenda.Agenda.entidades.Endereco;
import com.agenda.Agenda.repositories.ContatoRepository;
import com.agenda.Agenda.repositories.EnderecoRepository;

@Service
public class ContatoService {
	@Autowired
	private ContatoRepository contatoRepository;
	
	@Autowired
	private EnderecoRepository enderecoRepository;

	public Contato getByEmail(String email) {
		return contatoRepository.findByEmail(email);
	}

	public List<Contato> consultar() {
		return contatoRepository.findAll();
	}

	public Contato consultarPorId(Long id) {
		Optional<Contato> opt = contatoRepository.findById(id);
		Contato ct = opt.orElseThrow(() -> new RuntimeException("Contato não existe"));
		return ct;
	}

	public Contato inserir(Contato contato) {
		Endereco endereco = enderecoRepository.findById(contato.getEndereco().getId()).get();
		contato.setEndereco(endereco);
		return contatoRepository.save(contato);
	}

	public Contato editar(Contato contato) {
		Contato ct = consultarPorId(contato.getId());
		ct.setNome(contato.getNome());
		ct.setFone(contato.getFone());
		return contatoRepository.save(ct);
	}
}