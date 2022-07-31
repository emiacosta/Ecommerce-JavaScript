const suma = (a, b) => a + b
const resta = (a, b) => a - b
const iva = x => x * 0.21

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
    sumaIva() {
        return this.precio * 1.21;
    }
}

const producto1 = new Producto("pollo", 500);
const producto2 = new Producto("milanesa", 700);
const producto3 = new Producto("patitas", 800);
const producto4 = new Producto("suprema", 600);

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

let entrada = prompt("Qué producto deseas comprar? POLLO - MILANESA - PATITAS - SUPREMA");
//El siguiente ciclo le muestra al cliente el costo del producto, su IVA y su costo final, dependiendo del producto elegido.
while (entrada.toUpperCase() != "ESC") {

    switch (entrada.toUpperCase()) {
        case "POLLO":
            alert("Costo por 1kg de " + producto1.nombre + ": $" + producto1.precio + ". " + "IVA 21%: $" + iva(producto1.precio) + ". " + "Costo total: $" + producto1.sumaIva());
            break;
        case "MILANESA":
            alert("Costo por 1kg de " + producto2.nombre + ": $" + producto2.precio + ". " + "IVA 21%: $" + iva(producto2.precio) + ". " + "Costo total: $" + producto2.sumaIva());
            break;
        case "PATITAS":
            alert("Costo por 1kg de " + producto3.nombre + ": $" + producto3.precio + ". " + "IVA 21%: $" + iva(producto3.precio) + ". " + "Costo total: $" + producto3.sumaIva());
            break;
        case "SUPREMA":
            alert("Costo por 1kg de " + producto4.nombre + ": $" + producto4.precio + ". " + "IVA 21%: $" + iva(producto4.precio) + ". " + "Costo total: $" + producto4.sumaIva());
            break;
        default:
            alert("El dato ingresado no corresponde a las opciones brindadas. Por favor, volvé a ingresar un dato correcto.")
            break;
    }
    entrada = prompt("Ingresar otro producto: POLLO - MILANESA - PATITAS - SUPREMA");
}

