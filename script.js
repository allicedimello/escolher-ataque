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
        } else {
            console.log(`${this.tipo} não é um tipo válido, digite novamente`)
            return
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroiAlvo = new heroiJogo("Dumbledore", 303, "mago")
let heroiTargaryen = new heroiJogo("Daemon", 53, "guerreiro")
let heroiBruce = new heroiJogo("Batman", 43, "monge")  
let heroiUchiha = new heroiJogo("Naruto", 23, "ninja")

heroiAlvo.atacar()
heroiTargaryen.atacar()
heroiBruce.atacar()
heroiUchiha.atacar()