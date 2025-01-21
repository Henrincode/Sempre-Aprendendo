// Exemplo de solução para manter o contexto do `this` usando `setInterval`

// Definindo uma função construtora chamada `Pessoa`
function Pessoa() {
    this.idade = 0; // Propriedade `idade` inicializada em 0

    // Armazenando a referência ao `this` em uma constante chamada `self`
    // Isso garante que a referência ao contexto original (instância de `Pessoa`) seja preservada
    const self = this;

    // Usando `setInterval` para incrementar a idade a cada 1 segundo (1000 ms)
    setInterval(function () {
        self.idade++; // Incrementando a propriedade `idade` da instância
        console.log(self.idade); // Exibindo o valor atualizado de `idade`
    }, 1000);

    // Nota: `.bind(this)` foi comentado no código acima porque usamos a variável `self`
    // Também seria possível usar `.bind(this)` para garantir o contexto do `this`:
    // setInterval(function() {
    //     this.idade++;
    //     console.log(this.idade);
    // }.bind(this), 1000);
}

// Criando uma nova instância de `Pessoa`, que inicia o contador de idade automaticamente
new Pessoa();