package com.mvc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.mvc.model.ProdutoModel;

@Controller
public class ProdutoController {
	private List<ProdutoModel> lista = new ArrayList<ProdutoModel>();
	
	@GetMapping("/")
	public String home(Model model) {
		model.addAttribute("produtos", lista);
		return "index";
	}
	
	@GetMapping("/produto/acao/cadastro")
	public String cadastroForm(Model model) {
		model.addAttribute("Produto", new ProdutoModel());
		return "/produto/cadastro";
	}
	
	@PostMapping("/produto/acao/cadastro/salvar")
	public String salvar(@ModelAttribute ProdutoModel produto) {
		produto.setId(lista.size()+1l);
		lista.add(produto);
		return "redirect:/";
	}
	
	@GetMapping("/produto/acao/{idProduto}/edicao")
	public String edicaoForm(@PathVariable Long idProduto, Model model) {
		ProdutoModel produto = null;
		for (ProdutoModel prod : lista) {
			if (prod.getId() == idProduto) {
				produto = prod;
				break;
			}
		}
		model.addAttribute("produto", produto);
		return "/produto/edicao";
	}
	
	@PostMapping("/produto/acao/{idProduto}/edicao/salvar")
	public String editar(@PathVariable Long idProduto, @ModelAttribute ProdutoModel produto) {
		for (ProdutoModel prod : lista) {
			if (prod.getId() == idProduto) {
				prod.setDescricao(produto.getDescricao());
				prod.setPreco(produto.getPreco());
				break;
			}
		}
		return "redirect:/";
	}
}