function ordenarPalavras(lista: string[]):string[]{
    return lista.sort();
  }
  const readline = require("readline");
  
  const alf = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  alf.question("Escreva uma lista (Separada por virgula): ", (input: string) => {
    const palavras: string[] = input.split(",").map((palavra) => palavra.trim());
    
    const listaOrdenada: string[] = ordenarPalavras(palavras);
    
    console.log("Lista em ordem alfabética:",listaOrdenada);
    
    alf.close();
  });
  