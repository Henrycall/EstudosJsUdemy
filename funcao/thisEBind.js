const pessoa = {
    saudacao:'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradgima, nao funciona.


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()