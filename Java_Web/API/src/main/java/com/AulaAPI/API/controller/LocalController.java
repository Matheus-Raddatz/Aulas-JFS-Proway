package com.AulaAPI.API.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AulaAPI.API.entidades.Local;
import com.AulaAPI.API.repositorios.LocalRepository;

@RestController
@RequestMapping("/locais")
public class LocalController {
	
	private static List<Local> locais = new ArrayList<>();
	
	@Autowired
	LocalRepository repository;
	
	private Local ExisteLocal(Long id) {
		Local lc = null;
		for (Local local : locais) {
			if (local.getId().equals(id)) {
				lc = local;
				break;
			}
		}
		return lc;
	}
	
	@PostMapping
	public ResponseEntity<?> salvarLocal(@RequestBody Local local) {
		// local.setId(locais.size() + 1l);
		// locais.add(local);
		repository.save(local);
		return ResponseEntity.status(HttpStatus.OK).body("Local salvo!\nDados:"
			+ "\nID - " + local.getId()
			+ "\nNome - " + local.getNome()
			+ "\nRua - " + local.getRua()
			+ "\nBairro - " + local.getBairro()
			+ "\nCidade - " + local.getCidade()
			+ "\nCEP - " + local.getCep()
			+ "\nFone - " + local.getFone());
	}
	
	@GetMapping
	public ResponseEntity<?> consultarLocais() {
		// return ResponseEntity.status(HttpStatus.OK).body(locais);
		return ResponseEntity.status(HttpStatus.OK).body(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> consultarLocalPorId(@PathVariable("id") Long id) {
		Local lc = ExisteLocal(id);
		if (lc != null) {
			return ResponseEntity.status(HttpStatus.OK).body(lc);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum local encontrado com o ID " + id);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> editarLocal(@PathVariable("id") Long id, Local local) {
		Local lc = ExisteLocal(id);
		if (lc != null) {
			lc.setNome(local.getNome());
			lc.setRua(local.getRua());
			lc.setBairro(local.getBairro());
			lc.setCidade(local.getCidade());
			lc.setCep(local.getCep());
			lc.setFone(local.getFone());
			return ResponseEntity.status(HttpStatus.OK).body(lc);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum local encontrado com o ID " + id);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> excluirLocal(@PathVariable("id") Long id) {
		Local lc = ExisteLocal(id);
		if (lc != null) {
			locais.remove(lc);
			return ResponseEntity.status(HttpStatus.OK).body("Local excluído com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum local encontrado com o ID " + id);
		}
	}
}
