//Desafio 2 Calculadora de partidas Rankeadas
function calcularNivelRankeado(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  // Determina o nível com base nas vitórias
  if (vitorias < 10) {
      nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
  } else {
      nivel = "Imortal"; // Vitórias >= 101
  }

  return { saldoVitorias, nivel };
}
// Exemplo de uso
// Cenários de teste (vitórias, derrotas)
const casosTeste = [
  { v: 5, d: 3 },   // Ferro
  { v: 15, d: 5 },  // Bronze
  { v: 30, d: 10 }, // Prata
  { v: 70, d: 20 }, // Ouro
  { v: 85, d: 15 }, // Diamante
  { v: 95, d: 25 }, // Lendário
  { v: 150, d: 30 } // Imortal
];

// Loop para testar todos os casos
for (const caso of casosTeste) {
  const resultado = calcularNivelRankeado(caso.v, caso.d);
  console.log(`O Herói tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
}