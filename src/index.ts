//4- O jogo da memória é um clássico jogo formado por peças que apresentam uma figura em um dos lados.
//  Cada figura se repete em duas peças diferentes. Para começar o jogo, as peças são postas com as
//  figuras voltadas para baixo, para que não possam ser vistas. Cada participante deve, na sua vez,
//  virar duas peças, caso as figuras sejam iguais, o participante deve recolher consigo esse par e
//  jogar novamente. Se forem peças diferentes, estas devem ser viradas novamente, e sendo passada a
//  vez ao participante seguinte. Ganha o jogo quem tiver mais pares no final do jogo.
//Nesse exercício, será uma versão simplificada do jogo, onde o computador deve descobrir os
//  resultados das combinações. Dado o trecho de código para geração de um jogo da memória com 8
//  palavras, as quais serão armazenadas em um vetor de 16 posições dispostas aleatoriamente, crie
//  um código para resolver e imprimir o resultado das posições com as palavras iguais, por exemplo:
//  vetor[4] é igual ao vetor[6]; vetor [2] é igual ao vetor [3].



// Função para embaralhar um vetor usando Fisher-Yates Shuffle
function embaralharArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Gerar o jogo da memória com 8 palavras duplicadas
type ParPalavra = { palavra: string; indice: number };

const palavrasBase: string[] = ["gabinete", "monitor", "processador", "placaMae", "placaDeVideo", "memoriaRam", "SSD", "fonte"];
const palavrasDuplicadas: string[] = [...palavrasBase, ...palavrasBase];
const palavrasEmbaralhadas: string[] = embaralharArray(palavrasDuplicadas);

// Resolver o jogo encontrando os pares
function encontrarPares(vetor: string[]): string[] {
  const mapaPares = new Map<string, number[]>();
  const resultados: string[] = [];

  // Mapeia os índices de cada palavra
  vetor.forEach((palavra, indice) => {
      if (!mapaPares.has(palavra)) {
          mapaPares.set(palavra, []);
      }
      mapaPares.get(palavra)!.push(indice);
  });

  // Gera as combinações de pares
  mapaPares.forEach((indices, palavra) => {
      if (indices.length === 2) {
          resultados.push(`vetor[${indices[0]}] é igual ao vetor[${indices[1]}]`);
      }
  });

  return resultados;
}

// Imprimir resultado
const paresEncontrados = encontrarPares(palavrasEmbaralhadas);
console.log("Palavras embaralhadas:", palavrasEmbaralhadas);
console.log("Pares encontrados:", paresEncontrados);

