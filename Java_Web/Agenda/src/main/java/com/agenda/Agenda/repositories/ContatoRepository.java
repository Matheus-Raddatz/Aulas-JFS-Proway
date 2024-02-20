package com.agenda.Agenda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agenda.Agenda.entidades.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {
	public Contato findByEmail(String email);
}
