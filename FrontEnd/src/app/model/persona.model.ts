export class persona{
    id?: number; //El signo de pregunta al lado de id le indica que no es necesario asi no nos tira error por no estar inicializado
    nombre: String;
    apellido: String;
    img: String;

    constructor (nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}