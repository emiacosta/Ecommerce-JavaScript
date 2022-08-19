const productos = [
    {
        id: 0,
        nombre: "POLLO",
        precio: 450,
        imagen: "./img/pollo.jpg"
    },
    {
        id: 1,
        nombre: "MILANESA DE POLLO",
        precio: 900,
        imagen: "./img/milanesa.jpg"
    },
    {
        id: 2,
        nombre: "SUPREMA",
        precio: 1100,
        imagen: "./img/suprema.jpg"
    },
    {
        id: 3,
        nombre: "PATA Y MUSLO",
        precio: 500,
        imagen: "./img/pataymuslo.jpg"
    },
    {
        id: 4,
        nombre: "PATITAS DE POLLO",
        precio: 900,
        imagen: "./img/patitas.jpg"
    },
    {
        id: 5,
        nombre: "NUGGETS DE POLLO CROCANTES",
        precio: 980,
        imagen: "./img/nuggets.jpg"
    },
    {
        id: 6,
        nombre: "BASTONES DE MUZZARELLA",
        precio: 1400,
        imagen: "./img/bastonMuzza.jpg"
    },
    {
        id: 7,
        nombre: "BOCADITOS DE ESPINACA Y QUESO",
        precio: 850,
        imagen: "./img/bocaditosEspQueso.jpg"
    },
    {
        id: 8,
        nombre: "BOCADITOS DE CALABAZA Y QUESO",
        precio: 850,
        imagen: "./img/bocaditosCalQueso.jpg"
    },
    {
        id: 9,
        nombre: "CROQUETAS DE PAPA, JAMÓN Y QUESO",
        precio: 950,
        imagen: "./img/croquetas.jpg"
    },  
    {
        id: 10,
        nombre: "PAPAS BASTÓN<br><br>",
        precio: 800,
        imagen: "./img/papasBaston.jpg"
    },  
    {
        id: 11,
        nombre: "PAPAS SMILE<br><br>",
        precio: 950,
        imagen: "./img/papasSmile.jpg"
    },
    
    {
        id: 12,
        nombre: "MEDALLONES DE ESPINACA Y QUESO",
        precio: 950,
        imagen: "./img/medallonesEspQueso.jpg"
    },
    {
        id: 13,
        nombre: "PECHUGUITAS AL VERDEO",
        precio: 1300,
        imagen: "./img/pechugasVerdeo.jpg"
    },
    {
        id: 14,
        nombre: "FILET DE MERLUZA<br><br>",
        precio: 1500,
        imagen: "./img/filetMerluza.jpg"
    },
    
];

let contadorCarrito = 0;
const carrito = [];

const productoCatalogoHTML = (producto) => {
    return `
    <div class="card">
      <img src="${producto.imagen}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">${producto.nombre}</h3>
        <p class="card-text">Precio: $${producto.precio} x kg</p>
        <button id="boton-catalogo-${producto.id}" class="btn btn-warning">Añadir al carrito</button>
      </div>
     
    </div>`;
};

const productoCarritoHTML = (producto) => {
    return `
    <div class="card">
      <img src="${producto.imagen}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">${producto.nombre}</h3>
        <p class="card-text">Precio: $${producto.precio} x kg</p>
        <button id="boton-carrito-${producto.idCompra}" class="btn btn-dark">Eliminar del carrito</button>
      </div>
     </div>
    </div>`;
};

const mostrarCatalogo = () => {
    const catalogoNodo = document.getElementById("catalogo");
    let catalogoHTML = "";

    for (const producto of productos) {
        catalogoHTML += productoCatalogoHTML(producto);
    }

    catalogoNodo.innerHTML = catalogoHTML;
    botonesCatalogo();
};

const mostrarCarrito = () => {
    const carritoNodo = document.getElementById("carrito");
    const precioNodo = document.getElementById("precioTotal");
    let carritoHTML = "";
    let precioCarrito = 0;

    for (const producto of carrito) {
        carritoHTML += productoCarritoHTML(producto);
        precioCarrito += producto.precio;
    }


    precioNodo.innerHTML = "$" + precioCarrito;
    carritoNodo.innerHTML = carritoHTML;
    botonesCarrito();
};

const botonesCatalogo = () => {
    for (const producto of productos) {
        const botonId = `boton-catalogo-${producto.id}`;
        const botonNodo = document.getElementById(botonId);

        botonNodo.addEventListener("click", () => {
            const productoCarrito = {
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                idCompra: contadorCarrito,
            };

            contadorCarrito ++;
            carrito.push(productoCarrito);
            mostrarCarrito();
        });
    }
};

const botonesCarrito = () => {
    for (const producto of carrito) {
        const botonId = `boton-carrito-${producto.idCompra}`;
        const botonNodo = document.getElementById(botonId);

        botonNodo.addEventListener("click", () => {
            const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
            carrito.splice(index, 1);
            mostrarCarrito();
        });
    }
};

mostrarCatalogo();


