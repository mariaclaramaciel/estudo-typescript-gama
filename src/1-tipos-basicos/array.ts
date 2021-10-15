const gatos: string[] = [
    'aurora',
    'kim',
    'lola'
];

//gatos.push(5);
//nao posso inserir um numero sendo que definir o tipo da lista

function exibeGatos(gatos: string[]) {
    return `Os gatos são: ${gatos.join(', ')}`
}