//type ao contraio de objetc garante que usaramos todos os campos, definicao de tipos

type User = {
    name: string;
    idade: number;
    aniversario?: string;
    sobrenome: string;
}

//campos opcionais com ?

const maria: User = {
    name: 'Maria',
    idade: 24,
    sobrenome: 'Maciel'
}

//Union Types, informa que o valor tem que ser de um tipo ou de outro |
type LogoLevel = 'info' | 'error' | 'debug';

//Intersection &, agrupa varios types union

type About = {
    bio: string;
    intereses: string[];
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'Maria',
    idade: 24,
    sobrenome: 'Maciel',
    bio: 'ola, meu nome é Maria',
    intereses: ['gatos', 'cha']
}