
class Iphone{
    constructor(descripcion,precio,stock){
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;

    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}
let productosIphone=[];

//eventos con jQuery
jQuery(()=>{
const agregarFunda=[
    {descripcion:"Silicon case",precio:100,stock:10},
    {descripcion:"Silicon case Amarilla",precio:100,stock:10},
    {descripcion:"Silicon case Roja",precio:100,stock:10},
];

for (const productos of agregarFunda) {
    $("#contenedor-prod").append(
        `<div class="col-sm-4">
          <div class="card">
            <div class="card-body" id="caja-stock">
              <img src="js/imagenes/siliconcase.png" class="card-img-top" alt="funda de silicona para iphone">
              <h5 class="card-title"> ${agregarFunda.descripcion}</h5>
              <p class="card-text">${agregarFunda.precio}</p>
              <p class="card-text">${agregarFunda.stock}</p>
              <a href="#" class="btn btn-primary" id="miBoton">Lo quiero!</a>
            </div>
          </div>`
    );
}
})


