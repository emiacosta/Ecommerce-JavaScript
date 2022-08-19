const productos = [
    {
        id: 0,
        nombre: "POLLO",
        precio: 600,
        imagen: "./img/pollo.jpg"
    },
    {
        id: 1,
        nombre: "MILANESA",
        precio: 800,
        imagen: "./img/milanesa.jpg"
    },
    {
        id: 2,
        nombre: "PATITAS",
        precio: 950,
        imagen: "./img/patitas.jpg"
    },
    {
        id: 3,
        nombre: "SUPREMA",
        precio: 700,
        imagen: "./img/suprema.jpg"
    },
];

const carrito = [];

const productoHTML = (producto) => {
    const texto = `
    <div class="card" style="width: 18rem">
      <img src="${producto.imagen}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">${producto.nombre}</h3>
        <p class="card-text">Precio: $${producto.precio} x kg</p>
        <button id="boton-${producto.id}" class="btn btn-warning">Añadir al carrito</button>
      </div>
    </div>`;
    return texto;
};

const productoCarritoHTML = (producto) => {
    const texto = `
    <div class="card">
      <img src="${producto.imagen}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">${producto.nombre}</h3>
        <p class="card-text">Precio: $${producto.precio} x kg</p>
        <button id="boton-quitar-${producto.id}" class="btn btn-dark">Eliminar del carrito</button>
      </div>
    </div>`;
    return texto;
};

const catalogo = document.getElementById("catalogo");
const carritoDom = document.getElementById("carrito");

for (const producto of productos) {
    catalogo.innerHTML += productoHTML(producto);
};

for (const producto of productos) {
    const boton = document.getElementById(`boton-${producto.id}`);
    boton.addEventListener("click", () => {
        carrito.push(producto);
        addToCarrito();
    });
}

const addToCarrito = () => {
    let productosCarritoHTML = "";
    for (const producto of carrito) {
        productosCarritoHTML += productoCarritoHTML(producto);
    }
    console.log(productosCarritoHTML)
    carritoDom.innerHTML = productosCarritoHTML;
}


