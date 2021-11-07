class USUARIO{
    constructor(nombre, apellido, mascota, nombreLibro, autorLibro){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascota = mascota;
        this.nombreLibro = nombreLibro;
        this.autorLibro = autorLibro;
    }
    getFullName(){
        console.log("Nombre completo:" + this.nombre + " " + this.apellido)
    }

    countMascota(){
        console.log(this.nombre + " " + "tiene" + " " + this.mascota.length + " " + "mascotas")
    }

    getBookName(){
        console.log(this.nombreLibro)
    }
    addMascota(){
        this.mascota.push('lorito');
    }
    addBook(){
        this.nombreLibro.push('Cronicas de una muerte anunciada');
        this.autorLibro.push('Gabriel Garcia Marquez');
    }
}

const usuario1 = new USUARIO("Homero", "Simpson", ["Ayudante de Santa"], ["Caperucita Roja"], ["Autor"])
const usuario2 = new USUARIO("Naruto", "Uzumaki", ["Sapo", "Sakura"], ["Cronicas de Barbie"], ["Totoro"])

usuario1.addMascota();
usuario1.getFullName();
usuario1.countMascota();
usuario1.addBook();
usuario1.getBookName();
usuario2.addMascota();
usuario2.getFullName();
usuario2.countMascota();
usuario2.addBook();
usuario2.getBookName();
