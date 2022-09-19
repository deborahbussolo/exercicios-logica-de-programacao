// 2) Crie uma tabela "Cargos" com um campo cargo e outro campo "Salário Padrão", além de outra tabela para vincular um cargo a uma pessoal, bem como um campo "Salário". O campo salário pode ser diferente do campo "Salário Padrão", e uma pessoa pode ter mais de um cargo, em seguida alimente as tabelas com informações
// Criar uma tabela com cargos e os salários padrões daquele cargo, fazer OUTRA tabela com pessoas e esta receber um ou mais cargos, e nesta tabela ter o salário da pessoa.
var dict = new Map();

const nome = [
    'Alana Ferreira',
     'Carolina Mendes',
     'Eloah Mendes',
     'Pietro Pires',
     'Clarice Peixoto',
     'Maria Eduarda Ferreira',
     'Bryan da Rocha',
     'Kevin Ferreira',
     'Stella Novaes',
     'Carolina Nascimento'
]

class Cargo {
    constructor() {
        this.id = 1;
        this.arrayCargos = [];
    }

    salvar() {
        let cargo = this.lerDados();

        if(this.validaCampo(cargo)) {
            this.adicionar(cargo);
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody_cargo');
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayCargos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_cargo = tr.insertCell();
            let td_salario = tr.insertCell();
            let td_acoes = tr.insertCell();

            var elem = document.createElement('select')

            td_id.innerText = this.arrayCargos[i].id;
            td_cargo.innerText = this.arrayCargos[i].cargo;
            td_salario.innerText = 'R$ ' + this.arrayCargos[i].salario;

            td_id.classList.add('center');
            td_acoes.classList.add('center');


            let imgTrash = document.createElement('img');
            imgTrash.src = '/Page2/img/trash.png';
            imgTrash.setAttribute('onclick','cargo.deletar('+this.arrayCargos[i].id +')');
            //<td><img></td>
            td_acoes.appendChild(imgTrash);

            console.log(this.arrayCargos)
        }
    }

    adicionar(cargo) {
        this.arrayCargos.push(cargo);
        this.id++;
    }

    lerDados() {
        let cargo = {}

        cargo.id = this.id;
        cargo.cargo = document.getElementById('cargo').value;
        cargo.salario = document.getElementById('salario').value;

        return cargo;
    }

    cancelar() {
        document.getElementById('cargo').value = '';
        document.getElementById('salario').value = '';
    }

    deletar(id) {
        if((swal('ITEM '+id+' DELETADO !'))){
            for(let i = 0; i < this.arrayCargos.length; i++){
                if(this.arrayCargos[i].id == id){
                    this.arrayCargos.splice(i , 1);
                    tbody_cargo.deleteRow(i);
                }
            }
        }
    }

    validaCampo(cargo) {
        let msg = '';

        if(cargo.cargo == '') {
            msg += '- Informe o NOME do cargo.\n';
        }

        if(cargo.salario == '') {
            msg += '\n- Informe o VALOR do salario.\n';
        }

        if(msg != '') {
            swal(msg);
            return false
        }

        return true;
    }
}

var cargo = new Cargo();