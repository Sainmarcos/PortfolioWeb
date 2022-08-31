export class persona{
    id?: number; //El signo de pregunta al lado de id le indica que no es necesario asi no nos tira error por no estar inicializado
    nombre: String;
    apellido: String;
    img: String;
    tituloProf: String;
    descripcion: String;

    constructor (nombre: String, apellido: String, img: String, titulo: String, descripcion: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.tituloProf = titulo;
        this.descripcion = descripcion;
    }
}