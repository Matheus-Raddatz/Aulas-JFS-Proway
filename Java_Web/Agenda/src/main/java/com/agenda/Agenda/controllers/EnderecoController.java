package com.agenda.Agenda.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agenda.Agenda.entidades.Endereco;
import com.agenda.Agenda.services.EnderecoService;

@RestController
@RequestMapping("/enderecos")
public class EnderecoController {
	@Autowired
	EnderecoService service;
	
	@GetMapping
	public ResponseEntity<?> Consultar() {
		return ResponseEntity.status(HttpStatus.OK).body(service.consultar());
	}

	@PostMapping
	public ResponseEntity<?> Inserir(@RequestBody Endereco endereco) {
		return ResponseEntity.status(HttpStatus.OK).body(service.inserir(endereco));
	}
}
