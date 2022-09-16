// 2) Crie uma tabela "Cargos" com um campo cargo e outro campo "Salário Padrão", além de outra tabela para vincular um cargo a uma pessoal, bem como um campo "Salário". O campo salário pode ser diferente do campo "Salário Padrão", e uma pessoa pode ter mais de um cargo, em seguida alimente as tabelas com informações
// Criar uma tabela com cargos e os salários padrões daquele cargo, fazer OUTRA tabela com pessoas e esta receber um ou mais cargos, e nesta tabela ter o salário da pessoa.


class Cargo {
    constructor() {
        this.id = 1;
        this.arrayCargos = [];
    }

    salvar() {
        let cargo = this.lerDados();

        if (this.validaCampo(cargo)) {
            this.adicionar(cargo);
        }

        console.log(this.arrayCargos);
    }

    adicionar(cargo) {
        this.arrayCargos.push(cargo);
        this.id++;
    }

    lerDados(){
        let cargo = {}

        cargo.id = this.id;
        cargo.cargo = document.getElementById('cargo').value;
        cargo.salario = document.getElementById('salario').value;

        return cargo;
    }

    cancelar() {
        alert("Vamos excluir um cargo")
    }

    validaCampo(cargo) {
        let msg = '';

        if(cargo.cargo == '') {
            msg += '- informe o nome do cargo.\n';
        }

        if(cargo.salario == '') {
            msg += '- informe o valor do salario.\n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true;
    }
}

var cargo = new Cargo() 