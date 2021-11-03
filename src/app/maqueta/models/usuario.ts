export class Usuario {
    constructor(
        public nombre: string,
        public apellido1: string,
        public apellido2: string,
        public dni: string,
        public identificador: string,
        public departamento: string,
        public avatar: string,
        public id?: number
    ) {}
}