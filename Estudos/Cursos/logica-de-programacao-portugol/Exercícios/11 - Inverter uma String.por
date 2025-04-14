programa {
	inclua biblioteca Texto --> tx
	
	funcao inicio() {

	/*
	Objetivo:
	Inverter uma String
	Implemente um programa que inverte uma String fornecida pelo usuário utilizando um laço de repetição.
	*/
    
	cadeia texto
	inteiro tamanho_texto
	
	escreva("Informe uma palavra: ")
	leia(texto)
	
	tamanho_texto = tx.numero_caracteres(texto)
	
	para(inteiro i = tamanho_texto - 1; i >= 0; i--) {
	escreva(tx.obter_caracter(texto, i))
	}

	escreva("\n")
	}
}