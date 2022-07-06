import * as fs from 'fs'
import prompt from 'prompt-sync'
import { verificacao_horario, verificacao_numerica } from './Funcoes.js'
const input = prompt()

function main(){
  let inicio = "Boa noite cliente,em que posso ajudar?"
  inicio += "\n1 - Agendamento de consulta."
  inicio += "\n2 - Atualizar o plano de saúde."
  inicio += "\n0 - Sair"
  console.log(inicio)
  let num  = Number(input("Insira um qual opção deseja(1 ou 2): "))
  console.clear()
  if (num === 0){
    console.log('Fim')
  }


  while (num !== 0){
    if (num === 1){
      const verification = atendimento1()
      console.log(verification)
    } else if(num === 2){
      const verification = atendimento2()
      console.log(verification)
      
    }
    console.log('Processo finalizado com sucesso!!!')
    console.clear()   
    console.log(inicio)
    num = Number(input("Insira um qual opção deseja(1 ou 2): "))
  }
}

function atendimento1(){
  let dia = "Para qual dia da semana você deseja agendar sua consulta"
  dia += "\n1- quarta-feira"
  dia += "\n2- quinta-feira"
  dia += "\n3- sexta-feira"
  console.log(dia)

  let entrada = verificacao_numerica()
  
  let horario 

  if (entrada === 1){
    if (horario === 1){
      // horario = verificacao_horario()
      console.log('Consulta agendada para quarta-feira as 8:30 da manhã.')
    } else if(horario === 2){
      console.log('Consulta agendada para quarta-feira as 10:00 da manhã.')
    } else if(horario === 3){
      console.log('Consulta agendada para quarta-feira as 15:30 da tarde.')
    } else if(horario === 4){
      console.log('Consulta agendada para quarta-feira as 17:00 da tarde.')
    } 
    
    
  } else if(entrada === 2){
    // horario = verificacao_horario()
    if (horario === 1){
      console.log('Consulta agendada para quinta-feira as 8:30 da manhã.')
    } else if(horario === 2){
      console.log('Consulta agendada para quinta-feira as 10:00 da manhã.')
    } else if(horario === 3){
      console.log('Consulta agendada para quinta-feira as 15:30 da tarde.')
    } else if(horario === 4){
      console.log('Consulta agendada para quinta-feira as 17:00 da tarde.')
      
    }
  } else if(entrada === 3){
    // horario = verificacao_horario()
    if (horario === 1){
      console.log('Consulta agendada para sexta-feira as 8:30 da manhã.')
    } else if(horario === 2){
      console.log('Consulta agendada para sexta-feira as 10:00 da manhã.')
    } else if(horario === 3){
      console.log('Consulta agendada para sexta-feira as 15:30 da tarde.')
    } else if(horario === 4){
      console.log('Consulta agendada para sexta-feira as 17:00 da tarde.')

    }  
  }
}

function atendimento2(){
  let plano = "Para qual plano você deseja mudar?"
  plano += "\n1- Plano 1"
  plano += "\n2- Plano 1"
  plano += "\n3- Plano 3"
  console.log(plano)
  let entrada = verificacao_numerica()
  console.clear()

  if (entrada === 1){
    console.log("O plano 1 custa um total de R$ 350 + todos os benefícios inclusos. ")
    input('Pressione <enter> para finalizar.')
  
  } else if(entrada === 2){
    console.log( 'O plano 2 custa um total de R$  200 + benefício 1. ')
    input('Pressione <enter> para finalizar.')

  } else if(entrada == 3){
    console.log( 'O plano 3 custa um total de R$ 150.')
    input('Pressione <enter> para finalizar. ')
  
  }


}

main()