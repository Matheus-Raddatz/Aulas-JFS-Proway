package com.agenda.Agenda.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agenda.Agenda.entidades.Contato;
import com.agenda.Agenda.entidades.Endereco;
import com.agenda.Agenda.repositories.EnderecoRepository;

@Service
public class EnderecoService {
	@Autowired
	EnderecoRepository enderecoRepository;
	
	public Endereco getByEmail(String email) {
		return enderecoRepository.findByEmail(email);
	}

	public List<Endereco> consultar() {
		return enderecoRepository.findAll();
	}

	public Endereco consultarPorId(Long id) {
		Optional<Endereco> opt = enderecoRepository.findById(id);
		Endereco ed = opt.orElseThrow(() -> new RuntimeException("Endereço não existe"));
		return ed;
	}

	public Endereco inserir(Endereco endereco) {
		return enderecoRepository.save(endereco);
	}

	public Endereco editar(Endereco endereco) {
		Endereco ed = consultarPorId(endereco.getId());
		ed.setRua(endereco.getRua());
		ed.setBairro(endereco.getBairro());
		ed.setCidade(endereco.getCidade());
		ed.setNumero(endereco.getNumero());
		ed.setComplemento(endereco.getComplemento());
		return enderecoRepository.save(ed);
	}
}
