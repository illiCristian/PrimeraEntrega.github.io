import { idAutoIncrementable, pedirMonto, pedirNumero, pedirString, ultimoId, validarNumero } from "./funciones.js";

class NuevaCompra {
  constructor(id, nombre, descripcion, monto) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.monto = monto;
  }
}

let compra1 = new NuevaCompra(1, "heladera", "heladera no frost", 23900);
let compra2 = new NuevaCompra(2, "garrafas", "garrafa 10kg", 18400);
let compra3 = new NuevaCompra(3, "microondas", "microondas de 24 lt", 11234);
let compra4 = new NuevaCompra(4, "cocina","cocina marca 'Domec' tipo Industrial",89000);

const arrayCompras = [];

arrayCompras.push(compra1, compra2, compra3, compra4);

console.log(arrayCompras);

const crearCompra = (arrayCompras) => {
  let ultimo = ultimoId(arrayCompras);
  let id = idAutoIncrementable(ultimo.id),
    nombre = pedirString("Ingrese el nombre de la compra"),
    descripcion = pedirString("Ingrese la descripcion de la compra"),
    monto =  pedirMonto("Ingrese el monto de la compra");

  let compraNueva = new NuevaCompra(id, nombre, descripcion, monto);

  arrayCompras.push(compraNueva);

  return arrayCompras;
};

const fBorrarCompra = (arrayCompras) => {
  let entrada = pedirString('Ingrese el nombre de la compra que desea borrar');
  console.warn(entrada);
  let nuevoArr = arrayCompras.filter(arr => arr.nombre !== entrada);
  console.warn(nuevoArr);
  return nuevoArr;
}

const fFiltrarNombre = (arrayCompras) => {
  let nombre = pedirString("Ingrese el nombre del producto").toLowerCase();
  let encontrado = arrayCompras.find((el) => el.nombre === nombre);
  let mensaje;
  encontrado !== undefined
    ? (mensaje = `La compra '${encontrado.nombre}' con la descripcion '${encontrado.descripcion}' y tiene un monto total de $'${encontrado.monto}'`)
    : (mensaje = `El nombre: ${nombre} no fue encontrado en la lista`);

  alert(mensaje);
};

const fImprimirCompras = () => console.log(arrayCompras);

const calcularPromedios = (arrayCompras) => {
  let acum = 0;
  for (let i = 0; i < arrayCompras.length; i++) {
     acum += arrayCompras[i].monto;
     console.log(arrayCompras[i].monto);
    }
  let promedio = acum / arrayCompras.length;
    console.log(promedio);
  };
    
  

let $compra = document.getElementById("crear-compra");
$compra.addEventListener("click", () => crearCompra(arrayCompras));

let $imprimir = document.getElementById("mostrar-compras");
$imprimir.onclick = fImprimirCompras;

let $filtrarNombre = document.getElementById("filtrar-nombre");
$filtrarNombre.addEventListener("click", () => fFiltrarNombre(arrayCompras));

let $promedio = document.getElementById("mostrar-promedios");
$promedio.addEventListener("click", () => calcularPromedios(arrayCompras));

let $borrarCompra = document.getElementById("borrar-compra");
$borrarCompra.addEventListener("click", () => fBorrarCompra(arrayCompras));