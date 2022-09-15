constructor(); {
    this.arrayProjects = [];
}

lerdados(); {
    let produto = {
        id: 1,
        nome: "Alice Nascimento",
        cpf: "041-849-093.70",
        idade: 26,
        telefone: "(48) 9 3262-8617",
    }
    produto.id = document.getElementsById('id').value
    produto.nome = document.getElementsById('nome').value
    produto.cpf = document.getElementsById('cpf').value
    produto.idade = document.getElementsById('idade').value
    produto.telefone = document.getElementsById('telefone').value

    this.adicionar(produto)
    console.log(produto)

}

adicionar();{

}