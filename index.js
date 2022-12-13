let pontuacaoBase = 10
let vidaBase = 100
let vidaAtual

let vit = document.getElementById("vit")
let men = document.getElementById("men")
let forc = document.getElementById("forc")
let agi = document.getElementById("agi")
let esta = document.getElementById("esta")
let int = document.getElementById("int")
let des = document.getElementById("des")

let porVida = 15
let porMente = 7
let porEstamina = 10
let porInteligencia = 10
let porDestreza = 4

function calcularVitalidade(pontos){
  let pontuacao = pontos
  let porcentagemDeEscalonamento = porVida / 100
  let pontosAdicionais = pontuacao - pontuacaoBase
  vidaAtual = vidaBase
  for (let i = 0; i < pontosAdicionais; i++) {
    vidaAtual = vidaAtual + vidaAtual * porcentagemDeEscalonamento
  }
  vit.innerHTML = parseInt(vidaAtual)
}
function calcularMente(pontos){
  let pontuacao = pontos
  let porcentagemDeEscalonamento = porMente / 100
  let pontosAdicionais = pontuacao - pontuacaoBase
  vidaAtual = vidaBase
  for (let i = 0; i < pontosAdicionais; i++) {
    vidaAtual = vidaAtual + vidaAtual * porcentagemDeEscalonamento
  }
  men.innerHTML = parseInt(vidaAtual)
}
function calcularForca(pontos){
  let pontuacao = pontos
  let porcentagemDeEscalonamento = porForca / 100
  let pontosAdicionais = pontuacao - pontuacaoBase
  vidaAtual = vidaBase
  for (let i = 0; i < pontosAdicionais; i++) {
    vidaAtual = vidaAtual + vidaAtual * porcentagemDeEscalonamento
  }
  forc.innerHTML = parseInt(vidaAtual)
}
function calcularAgilidade(pontos){
  let pontuacao = pontos
  let porcentagemDeEscalonamento = porAgilidade / 100
  let pontosAdicionais = pontuacao - pontuacaoBase
  vidaAtual = vidaBase
  for (let i = 0; i < pontosAdicionais; i++) {
    vidaAtual = vidaAtual + vidaAtual * porcentagemDeEscalonamento
  }
  agi.innerHTML = parseInt(vidaAtual)
}
function calcularEstamina(pontos){
  let pontuacao = pontos
  let porcentagemDeEscalonamento = porEstamina / 100
  let pontosAdicionais = pontuacao - pontuacaoBase
  vidaAtual = vidaBase
  for (let i = 0; i < pontosAdicionais; i++) {
    vidaAtual = vidaAtual + vidaAtual * porcentagemDeEscalonamento
  }
  esta.innerHTML = parseInt(vidaAtual)
}

function calcularInteligencia(pontos){
  let pontuacao = pontos
  let porcentagemDeEscalonamento = porInteligencia / 100
  let pontosAdicionais = pontuacao - pontuacaoBase
  vidaAtual = vidaBase
  for (let i = 0; i < pontosAdicionais; i++) {
    vidaAtual = vidaAtual + vidaAtual * porcentagemDeEscalonamento
  }
  int.innerHTML = parseInt(vidaAtual)
}
function calcularDestreza(pontos){
  let pontuacao = pontos
  let porcentagemDeEscalonamento = porDestreza / 100
  let pontosAdicionais = pontuacao - pontuacaoBase
  vidaAtual = vidaBase
  for (let i = 0; i < pontosAdicionais; i++) {
    vidaAtual = vidaAtual + vidaAtual * porcentagemDeEscalonamento
  }
  des.innerHTML = parseInt(vidaAtual)
}
function calcularNivel(pontos){
  let nivel = parseInt(pontos / 10)
  let mostrarNivel = document.getElementById("nivel")
  mostrarNivel.innerHTML = nivel
}

addEventListener("DOMContentLoaded", function() {
  let vitalidade = parseInt(document.getElementById("vitalidade").value)
  let mente = parseInt(document.getElementById("mente").value)
  let estamina = parseInt(document.getElementById("estamina").value)
  let inteligencia = parseInt(document.getElementById("inteligencia").value)
  let destreza = parseInt(document.getElementById("destreza").value)
  let Xp = parseInt(this.document.getElementById("Xp").value)


  calcularVitalidade(vitalidade)
  calcularMente(mente)
  calcularEstamina(estamina)
  calcularInteligencia(inteligencia)
  calcularDestreza(destreza)
  calcularNivel(Xp)
})