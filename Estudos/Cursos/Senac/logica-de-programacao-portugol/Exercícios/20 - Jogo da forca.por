programa
{
	/*
		IMPORTANTE!!!
		Quando rodar o código arraste a área do console
		para cima para ver todo o conteúdo do game!
	*/
	
	inclua biblioteca Tipos --> ti
	inclua biblioteca Texto --> te
	inclua biblioteca Util  --> ut
	
	cadeia nomeReal = "", nomeLimpo = "",  letrasCertas = "", letrasErradas = "", dica1, dica2, dica3
	caracter letra = ' ', jogarMais = ' '
	inteiro nomeID, nomeRealTamanho, nomeLimpoTamanho, letrasCertasTamanho = 0, letrasErradasTamanho = 0
	logico finalizar = falso
	
	funcao inicio()
	{
		limpa()
		novoNome()
		jogo()
	}

	// FUNÇÕES!

	funcao jogo(){

		enquanto(vitoria() == falso e letrasErradasTamanho < 6){
		limpa()
		desenharForca()
		escreva(segredo())
		linha(2)
		dicas()
		linha(2)
		placar()
		escreva("digite uma letra: ")
		leia(letra)
		validarLetra()
		}

		se(finalizar == falso){
			
			se(vitoria()){
				
				limpa()
				desenharForca()
				escreva("Parabéns você GANHOU!!!")
				linha(2)
				escreva(segredo())
				linha(1)
				escreva("A palavra secreta é: ", nomeReal)
				linha(2)
				escreva("Jogar novamente (s/n): ")
				leia(jogarMais)

				novoJogo()
					
			}senao{

				limpa()
				desenharForca()
				escreva("Que peninha, você perdeu :(")
				linha(2)
				escreva(segredo())
				linha(1)
				escreva("A palavra secreta é: ", nomeReal)
				linha(2)
				escreva("Jogar novamente (s/n): ")
				leia(jogarMais)

				novoJogo()
			}	
		}
	}

	// TRABALHANDO Novo nome
	funcao novoNome(){

		// Zera variáveis ao iniciar um novo jogo
		letrasCertas = ""
		letrasErradas = ""
		letrasCertasTamanho = 0
		letrasErradasTamanho = 0
		finalizar = falso
		
		// 70 nomes aleatórios para serem usados no jogo
		nomeID = ut.sorteia(0, 69)
		
		const cadeia nomesParaSorteio[70][5] = {
						    {"Caixa d'água", "CAIXA DAGUA", "tem água", "normalmente é azul", "normalmente fica no telhado das casas"},
						    {"Guarda-chuva", "GUARDA CHUVA", "normalmente é preto", "usado em dias de chuva", "te protege da chuva"},
						    {"Abacateiro", "ABACATEIRO", "fruto verde", "usado em guacamole", "é uma árvore"},
						    {"Cachorrinho", "CACHORRINHO", "é um animal de estimação", "ladra", "gosta de brincar"},
						    {"Canguru", "CANGURU", "animal australiano", "salta muito", "tem bolsa para os filhotes"},
						    {"Catedral", "CATEDRAL", "edifício religioso", "geralmente tem vitrais", "encontra-se em cidades grandes"},
						    {"Elefante", "ELEFANTE", "o maior mamífero terrestre", "tem tromba", "é cinza"},
						    {"Estrela-do-mar", "ESTRELA DO MAR", "vive no mar", "tem cinco braços", "não é um peixe"},
						    {"Foguete", "FOGUETE", "usado para viajar ao espaço", "lança satélites", "é feito de metal"},
						    {"Guitarrista", "GUITARRISTA", "toca guitarra", "pode fazer shows", "faz parte de bandas"},
						    {"Jacarandá", "JACARANDA", "árvore tropical", "flores roxas", "sombra ampla"},
						    {"Macaco-prego", "MACACO PREGO", "animal inteligente", "vive nas árvores", "gosta de bananas"},
						    {"Pato-mergulhão", "PATO MERGULHAO", "ave aquática", "mergulha para pescar", "tem penas impermeáveis"},
						    {"Quati", "QUATI", "mamífero da América do Sul", "tem cauda longa", "é curioso"},
						    {"Rato-toupeira", "RATO TOUPEIRA", "vive debaixo da terra", "não tem visão", "tem pelo curto"},
						    {"Siriema", "SIRIEMA", "ave do Brasil", "canta alto", "é terrestre"},
						    {"Tigre-de-bengala", "TIGRE DE BENGALA", "grande felino", "tem listras", "predador"},
						    {"Urso-polar", "URSO POLAR", "vive no Ártico", "tem pelo branco", "é carnívoro"},
						    {"Violetas", "VIOLETAS", "flores roxas", "gostam de sombra", "são perenes"},
						    {"Zebra", "ZEBRA", "animal listrado", "vive na África", "é herbívoro"},
						    {"Aviãozinho", "AVIAOZINHO", "miniatura de avião", "brinca com crianças", "é feito de plástico"},
						    {"Bandeira", "BANDEIRA", "representa um país", "tem cores e símbolos", "é hasteada em edifícios"},
						    {"Cachoeira", "CACHOEIRA", "água em queda", "pode ser alta", "geralmente tem um lago embaixo"},
						    {"Dicionário", "DICIONARIO", "contém palavras", "ajuda a entender significados", "é usado por estudantes"},
						    {"Escorregador", "ESCORREGADOR", "brinquedo de parque", "as crianças descem", "é feito de metal ou plástico"},
						    {"Futebolista", "FUTEBOLISTA", "joga futebol", "pode ser profissional", "usa chuteiras"},
						    {"Girafa", "GIRAFA", "animal de pescoço longo", "come folhas de árvores altas", "é herbívora"},
						    {"Harmonia", "HARMONIA", "equilíbrio musical", "é agradável aos ouvidos", "pode ser em canções"},
						    {"Iguana", "IGUANA", "réptil tropical", "tem escamas", "gosta de sol"},
						    {"Jardineiro", "JARDINEIRO", "cuida de plantas", "trabalha em jardins", "usa ferramentas"},
						    {"Karaokê", "KARAOKE", "cantar com música", "diversão em grupo", "pode ser em festas"},
						    {"Limonada", "LIMONADA", "bebida refrescante", "feita de limão", "gosta de gelo"},
						    {"Marmelada", "MARMELADA", "doce de fruta", "pode ser de marmelo", "usada em torradas"},
						    {"Navegador", "NAVEGADOR", "explorador de mares", "usa mapas", "pode ser um computador"},
						    {"Ostras", "OSTRAS", "moluscos do mar", "podem ser comidas", "produzem pérolas"},
						    {"Palmeira", "PALMEIRA", "árvore tropical", "tem folhas longas", "cresce em climas quentes"},
						    {"Quebra-cabeça", "QUEBRA CABECA", "jogo de montar", "desafia a mente", "pode ter muitas peças"},
						    {"Ratoeira", "RATOEIRA", "armadilha para ratos", "ajuda a controlar pragas", "tem uma mola"},
						    {"Sofá-cama", "SOFA CAMA", "móvel para sentar", "pode ser transformado em cama", "é confortável"},
						    {"Tatu-bola", "TATU BOLA", "animal que se enrola", "tem carapaça", "é um mamífero"},
						    {"Urso-panda", "URSO PANDA", "animal da China", "come bambu", "é preto e branco"},
						    {"Vassoura", "VASSOURA", "usada para varrer", "feita de palha", "é uma ferramenta de limpeza"},
						    {"Xaxim", "XAXIM", "planta tropical", "usada em jardinagem", "tem textura fibrosa"},
						    {"Yeti", "YETI", "criatura mítica", "vive no Himalaia", "é conhecido como o 'homem das neves'"},
						    {"Zangado", "ZANGADO", "um dos sete anões", "muito conhecido", "tem um temperamento forte"},
						    {"Aeroporto", "AEROPORTO", "lugar para embarcar em voos", "tem muitas aeronaves", "pode ser internacional"},
						    {"Bicicleta", "BICICLETA", "meio de transporte", "tem duas rodas", "pode ser usada para lazer"},
						    {"Cachorrada", "CACHORRADA", "grupo de cães", "pode ser barulhento", "gosta de brincar"},
						    {"Dromedário", "DROMEDARIO", "animal do deserto", "tem uma corcova", "é um camelo"},
						    {"Esquilo", "ESQUILO", "animal que come nozes", "tem cauda longa", "vive em árvores"},
						    {"Fazendeiro", "FAZENDEIRO", "trabalha na agricultura", "cuida de animais", "geralmente tem uma fazenda"},
						    {"Galocha", "GALOCHA", "bota de borracha", "usada em dias de chuva", "mantém os pés secos"},
						    {"Hidrante", "HIDRANTE", "usado para combate a incêndios", "é vermelho", "tem uma mangueira"},
						    {"Igreja", "IGREJA", "edifício religioso", "pode ter uma torre", "é um lugar de culto"},
						    {"Jacaré", "JACARE", "réptil aquático", "tem dentes afiados", "vive em pântanos"},
						    {"Ketchup", "KETCHUP", "molho de tomate", "usado em hambúrgueres", "é doce e ácido"},
						    {"Linguista", "LINGUISTA", "estuda línguas", "pode ser professor", "trabalha com comunicação"},
						    {"Mochilão", "MOCHILAO", "mochila grande", "usada para viajar", "cabe muitas coisas"},
						    {"Nuvem", "NUVEM", "formação no céu", "pode trazer chuva", "é feita de vapor d'água"},
						    {"Orelhão", "ORELHAO", "telefone público", "usado para chamadas", "tem uma cabine"},
						    {"Papelaria", "PAPELARIA", "loja de papel e materiais", "vende cadernos", "é útil para estudantes"},
						    {"Quimono", "QUIMONO", "roupa tradicional japonesa", "geralmente é colorido", "usado em cerimônias"},
						    {"Roupão", "ROUPAO", "roupa de banho", "usado após o banho", "é confortável"},
						    {"Salgadinho", "SALGADINHO", "petisco", "geralmente é crocante", "é servido em festas"},
						    {"Torradeira", "TORRADEIRA", "aparelho de cozinha", "faz torradas", "funciona com eletricidade"},
						    {"Uva-passa", "UVA PASSA", "fruta seca", "usada em bolos", "é doce"},
						    {"Tomb Raider", "TOMB RAIDER", "Jogo virtual", "Protagonista feminina", "Saqueadora de tumbas"},
						    {"Xaxim", "XAXIM", "planta que cresce em árvores", "usada em jardinagem", "tem textura fibrosa"},
						    {"Zoológico", "ZOLOGICO", "lugar com animais", "educa sobre espécies", "tem várias atrações"},
						    {"Portugol Studio", "PORTUGOL STUDIO", "É um programa de computador", "usado para ajudar nos estudos", "é uma IDE muito boa para aprender lógica de programação"}
						}

		// Preenche as váriaveis do novo nome
		nomeReal = nomesParaSorteio[nomeID][0]
		nomeLimpo = nomesParaSorteio[nomeID][1]
		dica1 = nomesParaSorteio[nomeID][2]
		dica2 = nomesParaSorteio[nomeID][3]
		dica3 = nomesParaSorteio[nomeID][4]

		nomeRealTamanho = te.numero_caracteres(nomeReal)
		nomeLimpoTamanho = te.numero_caracteres(nomeLimpo)
		// usar esse bloco no final da função
	}

	// desenhar forca
	funcao desenharForca(){

		escolha(letrasErradasTamanho){
			caso 0:
			escreva(
			"+---+",	"\n",
			"|   |",	"\n",
			"|",		"\n",
			"|",		"\n",
			"|",		"\n",
			"|",		"\n",
			"======================"
			)
			linha(0)
			pare
			
			caso 1:
			escreva(
			"+---+",	"\n",
			"|   |",	"\n",
			"|   O",	"\n",
			"|",		"\n",
			"|",		"\n",
			"|",		"\n",
			"======================"
			)
			linha(0)
			pare
			
			caso 2:
			escreva(
			"+---+",	"\n",
			"|   |",	"\n",
			"|   O",	"\n",
			"|   |",	"\n",
			"|",		"\n",
			"|",		"\n",
			"======================"
			)
			linha(0)
			pare
			
			caso 3:
			escreva(
			"+---+",	"\n",
			"|   |",	"\n",
			"|   O",	"\n",
			"|  /|",	"\n",
			"|",		"\n",
			"|",		"\n",
			"======================"
			)
			linha(0)
			pare
			
			caso 4:
			escreva(
			"+---+",	"\n",
			"|   |",	"\n",
			"|   O",	"\n",
			"|  /|\\","\n",
			"|",		"\n",
			"|",		"\n",
			"======================"
			)
			linha(0)
			pare
			
			caso 5:
			escreva(
			"+---+",	"\n",
			"|   |",	"\n",
			"|   O",	"\n",
			"|  /|\\","\n",
			"|  /",	"\n",
			"|",		"\n",
			"======================"
			)
			linha(0)
			pare

			caso 6:
			escreva(
			"+---+", "\n",
			"|   |", "\n",
			"|   O", "\n",
			"|  /|\\", "\n",
			"|  / \\", "\n",
			"|", "\n",
			"======================"
			)
			linha(0)
			pare
		}
	}

	// Segredo = nome oculto
	funcao cadeia segredo(){
		
		cadeia nomeSegredo = "Adivinhe o segredo: "
		logico positivo
		
		para(inteiro iNome = 0; iNome < nomeLimpoTamanho; iNome++){

			se(te.obter_caracter(nomeLimpo, iNome) == ' '){

				nomeSegredo += "  "
			}senao{

				positivo = falso
				para(inteiro iLetra = 0; iLetra < letrasCertasTamanho; iLetra++){

					se(te.obter_caracter(nomeLimpo, iNome) == te.obter_caracter(letrasCertas, iLetra)){

						positivo = verdadeiro
						nomeSegredo += te.obter_caracter(nomeLimpo, iNome)
					}
				}

				se(positivo == falso){
					nomeSegredo += "_"
				}
			}

			
			nomeSegredo += " "
		}
		retorne nomeSegredo
	}

	// Dicas
	funcao dicas(){
			escreva("Dica 1: ", dica1)
			linha(1)
		se(letrasErradasTamanho > 2){
			escreva("Dica 2: ", dica2)
			linha(1)
		}
		se(letrasErradasTamanho > 4){
			escreva("Dica 3: ", dica3)
			linha(1)
		}
	}
	
	// Placar
	funcao placar(){
		escreva("--> ", letrasCertas)
		linha(1)
		escreva("Letras certas: ", letrasCertasTamanho)
		linha(2)
		escreva("--> ", letrasErradas)
		linha(1)
		escreva("Letras erradas: ", letrasErradasTamanho)
		linha(2)
	}
	
	// Validar letra
	funcao validarLetra(){

		limpa()
		letra = ti.cadeia_para_caracter(te.caixa_alta(ti.caracter_para_cadeia(letra)))

		
		cadeia alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		inteiro alfTamanho = te.numero_caracteres(alf)
		logico positivo = falso

		// É letra?
		para(inteiro i = 0; i < alfTamanho; i++){

			se(letra == te.obter_caracter(alf, i)){
				positivo = verdadeiro
			}
		}

		se(positivo == falso){

			desenharForca()
			escreva(segredo())
			linha(2)
			placar()
			escreva("! ▲ ! ▲ ! ▲ ! ▲ ! ▲ !", "\n",
				   "O valor informado não é uma letra", "\n",
				   "isso não conta como erro, tente novamente: ")
			leia(letra)
			validarLetra()
			
		}

		// Letra já foi usada?

		positivo = falso

		para(inteiro i = 0; i < letrasCertasTamanho + letrasErradasTamanho; i++){

			se(letra == te.obter_caracter(letrasCertas + letrasErradas, i)){
				positivo = verdadeiro
			}
		}

		se(positivo){

			desenharForca()
			escreva(segredo())
			linha(2)
			placar()
			escreva("! ▲ ! ▲ ! ▲ ! ▲ ! ▲ !", "\n",
				   "A letra informada > ", letra, " < já foi usada", "\n",
				   "isso não conta como erro, tente novamente: ")
			leia(letra)
			validarLetra()
		}

		// letra certa ou errada
		positivo = falso
		para(inteiro i = 0; i < nomeLimpoTamanho; i++){
			se(te.obter_caracter(nomeLimpo, i) == letra){
				positivo = verdadeiro
			}
		}
		se(positivo){
			
			letrasCertas += letra
			letrasCertasTamanho++
			linha(1)
			escreva("✓   Parabéns, você acertou a letra   ✓")
			ut.aguarde(2000)			
			jogo()
		}senao{
			letrasErradas += letra
			letrasErradasTamanho++
			linha(1)
			escreva("✖  Que peninha, você errou a letra  ✖")
			ut.aguarde(2000)
			jogo()
		}
		
		
	}

	// Se não ouver mais caracteres '_' o jogo já identifica vitória
	funcao logico vitoria(){
		
		para(inteiro i = 0; i < te.numero_caracteres(segredo()); i++){

			se(te.obter_caracter(segredo(), i) == '_'){
				retorne falso
			}
		}
		retorne verdadeiro
	}

	// Apenas desenha linhas de acordo com o número informado
	funcao linha(inteiro li){
		escolha(li){
			caso 0: // 0 é o padrão de linhas do desenho da forca
			escreva("\n")
			caso 1:
			escreva("\n")
			pare
			caso 2:
			escreva("\n\n")
			pare
			caso 3:
			escreva("\n\n\n")
			pare
		}
	}

	// Novo Jogo
	funcao novoJogo(){
				
		se(jogarMais == 's'){
			inicio()
		}senao{
			finalizar = verdadeiro
			}
		}
}