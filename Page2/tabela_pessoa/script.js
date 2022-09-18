const nomes = [
    'Alana Ferreira',
     'Carolina Mendes',
     'Eloah Mendes',
     'Pietro Pires',
     'Clarice Peixoto',
     'Maria Eduarda Ferreira',
     'Bryan da Rocha',
     'Kevin Ferreira',
     'Stella Novaes',
     'Carolina Nascimento'];

const cpf =[
    '432.378.838-08',
    '160.651.371-03',
    '671.784.538-42',
    '005.056.542-10',
    '735.252.344-81',
    '034.644.482-23',
    '489.741.964-68',
    '067.355.004-72',
    '425.373.726-97',
    '246.073.101-75',
]

const idades =[
    '25',
    '82',
    '67',
    '54',
    '19',
    '36',
    '29',
    '68',
    '51',
    '18',
]

const telefones = [
     '(92) 2251-9374',
     '(62) 2999-4656',
     '(32) 2876-8574',
     '(13) 2443-4436',
     '(99) 2475-0553',
     '(65) 2497-2286',
     '(79) 3476-4318',
     '(66) 2840-0198',
     '(44) 2607-1873',
     '(68) 2532-2215'];


nomes.sort();
console.log(nomes);

class Pessoa {
    constructor() {
        this.i = 0;
        this.arrayNomes= nomes;
        this.arrayCPFs = cpf;
        this.arrayIdades = idades;
        this.arrayTelefones = telefones;
    }
    
    gerar() {
        if(this.i < 10){
            this.listaTabela(this.i);
            this.i++; 
        }
    }

    listaTabela(i) {
        let tbody = document.getElementById('tbody');

        let tr= tbody.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_cpf = tr.insertCell();
        let td_idade = tr.insertCell();
        let td_telefone = tr.insertCell();

        //td_id.innerText = id;
        td_nome.innerText = this.arrayNomes[i];
        td_cpf.innerText = this.arrayCPFs[i];
        td_idade.innerText = this.arrayIdades[i];
        td_telefone.innerText = this.arrayTelefones[i];

        td_idade.classList.add('center');
        }
}


var pessoa = new Pessoa()
