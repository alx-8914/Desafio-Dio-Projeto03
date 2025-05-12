Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O que foi utilizado**

Variáveis:
- vitorias e derrotas (parâmetros da função).
- saldoVitorias (calculado como vitorias - derrotas).
- nivel (determinado com base nas vitórias).

Operadores: 
- Aritméticos (- para calcular o saldo).
- Comparação (>=, <=, <).

Laços de Repetição:
- Loop for...of para testar múltiplos cenários de jogadores.

Estruturas de Decisão:
- if/else encadeado para definir o nível conforme as faixas de vitórias.

Funções:
- calcularNivelRankeado(vitorias, derrotas) encapsula toda a lógica.

## Ajuste nos Intervalos:
- O código assume que "entre 11 e 20" inclui 11 e 20 (valores inteiros).

- ⚠️ Gap em vitórias = 10:
- Se um jogador tiver exatamente 10 vitórias, nenhuma condição será atendida.
- *Sugestão: Verificar se o intervalo correto para Bronze é 10-20*.

## Métricas
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

## resultado
O Herói tem saldo de 2 e está no nível de Ferro
O Herói tem saldo de 10 e está no nível de Bronze
O Herói tem saldo de 20 e está no nível de Prata
O Herói tem saldo de 50 e está no nível de Ouro
O Herói tem saldo de 70 e está no nível de Diamante
O Herói tem saldo de 70 e está no nível de Lendário
O Herói tem saldo de 120 e está no nível de Imortal