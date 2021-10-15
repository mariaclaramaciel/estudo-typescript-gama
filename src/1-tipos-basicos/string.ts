let nome: string;
//garatimos que seria uma string mesmo sem definir um valor
//so depois definimos o valor
nome = "gabriel";

function nomeCompleto(nome: string, completo: string) {
    return `${nome} ${completo}`
}

nomeCompleto('maria', 'clara')