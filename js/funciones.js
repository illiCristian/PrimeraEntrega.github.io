
export const validarNumero = (num, rango1, rango2, mensaje1) => {
    while (num < rango1 || num > rango2 || isNaN(num)) {
      alert(mensaje1);
      num = parseFloat(prompt("Ingrese solo numeros! dentro de los rangos validos"));
    }
    return num;
  };
export const idAutoIncrementable = (id) => id + 1;

export const ultimoId = (arr) =>{
  let ultimoId = arr[arr.length-1];
  return ultimoId;
}
  export const pedirMonto = () =>{
    let monto = parseFloat(prompt("Ingrese el monto total"));
    let mensajeMonto = `Tiene que ingresar un monto entre 1 y 1.000.000`;
    monto = validarNumero(monto, 1, 1000000, mensajeMonto);
    return monto;
  }

  export const pedirString = (mensaje) => prompt(mensaje);

  export const fCalculoPersonalizado = () =>{
    let montoP = pedirMonto();
    let cuotas = pedirNumero('Ingrese la cantidad de cuotas');
    let intereses = pedirNumero('Ingrese la cantidad de intereses');
    let calculo = (Number(montoP) * Number(intereses/100 +1)) / Number(cuotas);
    console.log(`El monto: $${montoP} en cuotas: ${cuotas} con intereses: ${intereses}% queda un total de $${(Number(montoP) * Number(intereses/100 +1))} en ${cuotas} de ${calculo}`);
  }

  export const pedirNumero = (mensaje) => parseFloat(prompt(mensaje));

  export const calcularIntereses = (valor, porcentaje, cuotas) =>
  ((valor + valor * porcentaje) / cuotas).toFixed(2);

  export const pagoEfectivo = (monto) => (monto - (monto * 0.10));