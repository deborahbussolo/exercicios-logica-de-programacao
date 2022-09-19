// DICIONARIOS
var dict_cargo = new Map();
var dict_pessoa = new Map();

//INFORMAÇÕES PARA AS TABELAS
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
];

const cargo = [
     'Desenvolvedor Front-End',
     'Desenvolvedor Back-End',
     'Desenvolvedor Full-Stack',
     'Especialista UI/UX',
     'Desenvolvedor Mobile',
     'Cientista de dados',
];

const salario =[
    '2.550,00',
    '2.550,00',
    '3.300,00',
    '3.900,00',
    '2.500,00',
    '3.050,00',
];

// CRIANDO DICIONARIO LINKANDO OS CARGOS COM OS SEUS SALARIOS
for(let i = 0; i < 6; i++){
    dict_cargo.set(cargo[i], salario[i])
}

console.log(dict_cargo)

// ORGANIZANDO EM ORDEM ALFABETICA
cargo.sort();
nome.sort();


//CLASSE CARGO
class Cargo {
    constructor() {
        this.i = 0;
    }

    gerarAll() {
        this.listaTabela(this.i);
    }
    

// CRIANDO A LISTA DE FORMA DINAMICA
    listaTabela(i) {

        let tbody = document.getElementById('tbody');

    //ADICIONANDO LINHAS E COLUNAS
        if(this.i < 6){
            for(this.i = 0; this.i < 6; this.i++){
                let tr= tbody.insertRow();

                let td_id = tr.insertCell();
                let td_cargo = tr.insertCell();
                let td_salario = tr.insertCell();

            //ADICIONANDO AS INFORMAÇÕES DAS CELULAS
                td_id.innerText = this.i+1;
                td_cargo.innerText = cargo[this.i];
                td_salario.innerText = 'R$ ' + dict_cargo.get(cargo[this.i]);
            
            //ADICIONANDO CLASSE DE FORMA DINAMICA
                td_id.classList.add('center');
                td_cargo.classList.add('pointer');
            
            //CRIANDO UMA FUNÇÃO PARA SELECIONAR UMA LINHA
                var createClickHandler = function(row) {
                    return function() {
                        var cell1 = row.getElementsByTagName("td")[1];
                        var cell2 = row.getElementsByTagName("td")[2];
                        var nome_cargo = cell1.innerHTML;
                        var valor_cargo = cell2.innerHTML;
                        // MOSTRANDO RELATORIO DA LINHA SELECIONADA
                        swal('Relatorio Geral:\n'+ "\nCargo: " + nome_cargo + '\nSalario Padrão: ' + valor_cargo);
                    };
                };
                tr.onclick = createClickHandler(tr);
            }
        }
    }   
}

//CLASSE PESSOA
class Pessoa  {
    constructor() {
        this.i = 0;

    }

//FUNÇÃO CHAMADA PELO BUTTON NO HTML
    gerarAll() {
        this.listaTabela(this.i);
    }
    

// CRIANDO A LISTA DE FORMA DINAMICA
    listaTabela(i) {

        let tbody_pessoa = document.getElementById('tbody_pessoa');

    //ADICIONANDO LINHAS E COLUNAS
        if(this.i < 10){
            for( this.i = 0; this.i < 10; this.i++){
                pessoa.nome = nome[this.i];
                if(this.i < 3){
                    pessoa.cargo = cargo[this.i+3];
                    pessoa.salario = dict_cargo.get(cargo[this.i+3]);
                    console.log(pessoa)
                }
                if(this.i >= 4){
                    pessoa.cargo = cargo[this.i-4];
                    pessoa.salario = dict_cargo.get(cargo[this.i-4]);
                    console.log(pessoa)  
                }
                
                let tr= tbody_pessoa.insertRow();

                let td_nome = tr.insertCell();
                let td_cargo = tr.insertCell();
                let td_salario_padrao = tr.insertCell();

            //ADICIONANDO AS INFORMAÇÕES DAS CELULAS
                td_nome.innerText = pessoa.nome;
                td_cargo.innerText = pessoa.cargo;
                td_salario_padrao.innerText = 'R$ ' + pessoa.salario;
        
            //ADICIONANDO CLASSE DE FORMA DINAMICA
                td_nome.classList.add('pointer');

            //CRIANDO UMA FUNÇÃO PARA SELECIONAR UMA LINHA
                var createClickHandler = function(row) {
                    return function() {
                        var cell0 = row.getElementsByTagName('td')[0]
                        var cell1 = row.getElementsByTagName("td")[1];
                        var cell2 = row.getElementsByTagName("td")[2];
                        var nome_pessoa = cell0.innerHTML;
                        var nome_cargo = cell1.innerHTML;
                        var valor_cargo = cell2.innerHTML;
                    // MOSTRANDO RELATORIO DA LINHA SELECIONADA
                        swal('Relatorio Geral:\n'+ '\nNome: '+ nome_pessoa +"\nCargo: " + nome_cargo + '\nSalario: ' + valor_cargo);
                    };
                };
                tr.onclick = createClickHandler(tr);
            }
        }
    }   
}

var profissao = new Cargo()
var pessoa = new Pessoa()