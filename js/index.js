// let usuario = {}

// usuario.nombre = "Andres"
// usuario.apellido = "Perez"
// usuario.edad = 35
// usuario.esProgramador = true
// usuario.hablar = function(){alert(`Mi nombre es ${this.nombre} ${this.apellido}`)}

/*
let usuario = {
    nombre: "Andres",
    apellido: "Perez",
    edad: 35,
    esProgramador: true,
    hablar: function(){
    this.nombre = prompt(`Cual es mi nombre?`)
    //alert(`Mi nombre es ${this.nombre} y me edad es ${this.edad}años`);
    }
    }
    */
    // let usuario = {}
    
    // usuario["nombre"] = "Andres"
    // usuario["apellido"] = "Perez"
    // usuario.edad = 35
    // usuario.esProgramador = true
    
    // console.log(usuario)
    
    // Crear un objeto Pokemon con los atributos: nombre, nivel, tipo (gras, fuego, agua, normal, etc.), hablar ->
    // Mi nombre es <nombre del pokemon> y soy de nivel <nivel del pokemon>

let pokemon = {
    nombre: "Carlos",
    nivel : "8",
    tipo: "fuego",
    hablar: function(){
    alert(`Mi nombre es ${this.nombre}  y soy nivel es ${this.nivel}`);
  }
}

console.log(pokemon);

/*
class perro{
    nombre;
    raza;
    altura;
    comer() => 
    dormir()
    ladrar()
}

let firulais = new perro()
console.log(firulais); */
/*
class Persona {
piernas = 2;
brazos = 2;
ojos = 2;
}

let alfredo = new Persona()
alfredo.ojos = 3
console.log(alfredo)*/