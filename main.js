//CREO LA CLASE
class Productos{
    constructor (modelo,precio,color){
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}


let productosSamgung=[];
let listaProductos = [];
let productosIphone = [];
/*
const productoAgregado=()=>{
    let prodInicial = prompt("¿Qué producto quieres comprar?");
    let precioInicial = parseFloat(prompt("¿Cuánto cuesta?"));
    let colorElegido = promp("que color le gustaria?");
    let productoAgregado=new Productos(prodInicial,precioInicial,colorElegido);
    listaProductos.push(productoAgregado);
}*/

productosSamgung.push(new Productos("Galaxy S10",1000,"blanco"));
productosSamgung.push(new Productos("Galaxy S20",2000,"amarillo"));
productosSamgung.push(new Productos("Galaxy S30",3000,"rojo"));
productosIphone.push(new Productos("Iphone X",3000,"rojo"));
productosIphone.push(new Productos("Iphone XS",4000,"negro"));


//mostrar productos 
let buscar = prompt("¿que desea comprar?").toLowerCase();
if (buscar =="iphone"){
        for (const obj of productosIphone){
            console.log("El modelo de iphone es " + obj.modelo + " y el precio es $" + obj.sumaIva() + " en color " + obj.color);
        }
}else if (buscar=="samsung"){
    for (const obj of productosSamgung){
        console.log("El modelo de Samsung es " + obj.modelo + " y el precio es $" + obj.sumaIva() + " en color " + obj.color);
    }
}else{
    alert("no existe ese producto");
}

let mercaderiaFinal=productosSamgung.concat(productosIphone);
for (obj of mercaderiaFinal){
    console.log(obj.modelo);
}

//ALMACENO DATOS

const guardarDatos = () =>{
    localStorage.setItem("productos",JSON.stringify(productosIphone)
    );
}
//obtengo lo almacenado
const obtenerDatos = JSON.parse(localStorage.getItem("productos"));

//dom

let nuevosProductos= document.createElement("p");
nuevosProductos.setAttribute("id","nuevosProductos");
nuevosProductos.innerHTML= "En esta seccion les estaremos contando las novedades de la tienda, descuentos exclusivos, y proximas llegadas";
document.getElementById("novedades").appendChild(nuevosProductos);
console.log(nuevosProductos);

// for of con dom

for(const objetos of productosSamgung){
    let li= document.createElement("li");
    li.innerHTML=objetos.modelo;
    document.getElementById("productosSamsung").appendChild(li);
    li.style.textAlign="center";
    li.style.margin="20px";
}

