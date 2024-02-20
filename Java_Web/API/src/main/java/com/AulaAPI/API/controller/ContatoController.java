package com.AulaAPI.API.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.AulaAPI.API.entidades.Contato;

@RestController
public class ContatoController {

	private static List<Contato> contatos = new ArrayList<>();

	// @GetMapping("/contatos") public String ola() { return "Hello World!"; }

	// @GetMapping("/pessoas") public String tchau() { return "Arriverdeti!"; }

	private Contato ExisteContato(Long id) {
		Contato ct = null;
		for (Contato contato : contatos) {
			if (contato.getId().equals(id)) {
				ct = contato;
				break;
			}
		}
		return ct;
	}

	@GetMapping("/contatos")
	public ResponseEntity<?> consultarContatos() {
		return ResponseEntity.status(HttpStatus.OK).body(contatos);
	}

	@GetMapping("/contatos/{id}")
	public ResponseEntity<?> consultarContatoPorId(@PathVariable("id") Long id) {
		Contato ct = ExisteContato(id);
		if (ct != null) {
			return ResponseEntity.status(HttpStatus.OK).body(ct);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum contato encontrado com o ID " + id);
		}
	}

	@PutMapping("/contatos/{id}")
	public ResponseEntity<?> editarContato(@PathVariable("id") Long id, @RequestBody Contato contato) {
		Contato ct = ExisteContato(id);
		if (ct != null) {
			ct.setNome(contato.getNome());
			ct.setEmail(contato.getEmail());
			return ResponseEntity.status(HttpStatus.OK).body(ct);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum contato encontrado com o ID " + id);
		}
	}

	@PostMapping("/contatos")
	public ResponseEntity<?> salvarContato(@RequestBody Contato contato) {
		contato.setId(contatos.size() + 1l);
		contatos.add(contato);
		return ResponseEntity.status(HttpStatus.CREATED).body("Contato Salvo!\nDados:\nId - " + contato.getId()
				+ "\nNome - " + contato.getNome() + "\nEmail - " + contato.getEmail());
	}

	@DeleteMapping("/contatos/{id}")
	public ResponseEntity<?> excluirContato(@PathVariable("id") Long id) {
		Contato ct = ExisteContato(id);
		if (ct != null) {
			contatos.remove(ct);
			return ResponseEntity.status(HttpStatus.OK).body("Contato excluído com sucesso");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum contato encontrado com o ID " + id);
		}
	}
}

// Verbos HTTP
// Get /nome
// Get /nome/id
// Post /nome
// Put /nome/id
// Delete /nome/id
