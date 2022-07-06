import prompt from "prompt-sync"
const input = prompt()

export function verificacao_numerica(){
    let digito = Number(input("> "))
    
    while(digito !== 1 || digito !==2 || digito !== 3 || digito !== 4){
        // digito = Number(input("> "))
        if(digito === 1){
            return digito
        }else if(digito === 2){
            return digito
        }else if(digito === 3){
            return digito
        }else if(digito === 4){
            return digito
        }
    }
    return false
    
}

export function verificacao_horario(){
    let horario = "Confira os horários disponíveis:"
    horario += "\n1 - 8:30 AM."
    horario += "\n2 - 10:00 AM."
    horario += "\n3 - 15:30 PM."
    horario += "\n4 - 17:00 PM."
    let numero = Number(input("> "))   
    return numero
}
// verificacao_horario()

export function ultimo_elemento(){
    const tamanho = Number(input("Tamanho do vetor: "))
    let vetor = new Array(tamanho)

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input("Insira um elemento: "))
    }
    // console.log(vetor)

    const ultimo = vetor.slice(-1)
    console.log(ultimo)
}
// ultimo_elemento()

function vetor_padrao(){
    let vetor = new Array("Daniel",20,30,40,50, null)

    const padrao = vetor.fill("Daniel")
    console.log(padrao)
}
// vetor_padrao()

function substituir_caracteristica(){
    const texto = "Disponível"
    const subst = texto.replace("Disponível", "Indisponível")
    console.log(subst)
}
// substituir_caracteristica()

function mapear_nomes(){
    const RG = [
        {name: "Joao", registro: "004"},
        {name: "Daniel", registro: "054"},
        {name: "Maria", registro: "065"},
        {name: "Jorge", registro: "003"},
        {name: "Marcos", registro: "010"},
        
    ]
    const rg = RG.map(NUMERO => NUMERO.registro)
    const names = RG.map(FUNCIONARIO => FUNCIONARIO.name)
    console.log(`Nome: ${names[0]} \nRegistro do Funcionário: ${rg[0]}`)
   
}
// mapear_nomes()

function identificar_cliente(){

    const pessoas = [
        {name: "John", CPF: "064.455.253"},
        {name: "Marcos", CPF: "064.345.193"},
        {name: "Romero", CPF: "064.735.823"},
        {name: "Michael", CPF: "065.565.953"},
    ]
    const verificar_cpf = (pessoa) => (pessoa.CPF === "064.345.193")
    const identificacao = pessoas.filter(verificar_cpf)
    console.log(identificacao)
}
identificar_cliente()