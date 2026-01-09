class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }
        console.log(`O ${this.nome} do tipo ${this.tipo} atacou usando ${ataque}`)
}
}

let meuHeroi = new hero("Luiz", 20, "mago");
meuHeroi.atacar();


let outroHeroi = new hero("Naruto", 16, "ninja");
outroHeroi.atacar();

let ryan = new hero ("ryan", 29 , "guerreiro")
ryan.atacar();