export enum Color {
    rojo, negro, blanco, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}