class heroiJogo{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        if(this.tipo === "mago"){
            ataque = "magia"
        } else if(this.tipo === "guerreiro"){
            ataque = "espada"
        } else if(this.tipo === "monge"){
            ataque = "artes marciais"
        } else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const botao = document.getElementById("botaoAtacar");

    botao.addEventListener("click", () => {
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const tipo = document.getElementById("tipo").value;

        if (!nome || isNaN(idade) || idade <= 0 || !tipo) {
            document.getElementById("saida").textContent = "Por favor, preencha ambos os campos corretamente.";
            return;
        }

        const heroi = new heroiJogo(nome, idade, tipo);

        const resultado = heroi.atacar();

        document.getElementById("saida").innerText = resultado;

        setTimeout(function() {
            document.getElementById("form").reset();
        }, 500);
    });
});