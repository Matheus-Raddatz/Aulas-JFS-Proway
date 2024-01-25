package classes;

public class Carro {
	private String id;
	private String placa;
	private String modelo;
	
	public Carro(String id, String placa, String modelo) {
		this.id = id;
		this.placa = placa;
		this.modelo = modelo;
	}
	
	public String getId() {
		return id;
	}

	public String getPlaca() {
		return placa;
	}

	public String getModelo() {
		return modelo;
	}

	public String toString() {
		return "Placa: " + this.placa + " | Modelo: " + this.modelo;
	}

}