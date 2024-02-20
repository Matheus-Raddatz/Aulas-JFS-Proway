package com.agenda.Agenda.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agenda.Agenda.entidades.Contato;
import com.agenda.Agenda.services.ContatoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/contatos")
public class ContatoController {
	@Autowired
	ContatoService service;

	@GetMapping
	public ResponseEntity<?> Consultar() {
		return ResponseEntity.status(HttpStatus.OK).body(service.consultar());
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> ConsultarPorId(@PathVariable("id") Long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.consultarPorId(id));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@PostMapping
	public ResponseEntity<?> Inserir(@Valid @RequestBody Contato contato) {
		try {
			if (service.getByEmail(contato.getEmail()) != null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email já utilizado");
			}
			return ResponseEntity.status(HttpStatus.OK).body(service.inserir(contato));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage())
		}
		
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> Editar(@PathVariable("id") Long id, @RequestBody Contato contato) {
		try {
			if (contato.getId() == null) {
				contato.setId(id);
			}
			return ResponseEntity.status(HttpStatus.OK).body(service.editar(contato));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
}
