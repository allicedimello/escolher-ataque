class heroiJogo{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };
        
        const ataque = ataques[this.tipo];

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
            document.getElementById("saida").textContent = "Por favor, preencha os campos corretamente.";
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