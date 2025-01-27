
// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "realizou um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Arthur", 30, "guerreiro");
heroi1.atacar();

const heroi2 = new Heroi("Merlin", 150, "mago");
heroi2.atacar();

const heroi3 = new Heroi("Lee", 25, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Hanzo", 29, "ninja");
heroi4.atacar();

