const productos = [
    {id: "Remera basica blanca" , 
    nombre: "Remera basica blanca", 
    precio: 10000, 
    img: "./assets/remera-basica-blanca.jpg",
    cantidad: 1},
    {id: "Remera basica negra", 
    nombre: "Remera basica negra", 
    precio: 10000, 
    img: "./assets/remera-basica-negra.png",
    cantidad: 1},
    {id:  "Remera basica gris", 
    nombre: "Remera basica gris", 
    precio: 12000, 
    img: "./assets/remera-basica-gris.jpg",
    cantidad: 1},
    {id: "Remera basica azul", 
    nombre: "Remera basica azul", 
    precio: 14000, 
    img: "./assets/remera-basica-azul.jpg",
    cantidad: 1},
    {id: "Remera basica roja", 
    nombre: "Remera basica roja", 
    precio: 13000, 
    img: "./assets/remera-basica-roja.png",
    cantidad: 1},
];

const contenedorProductos = document.querySelector("#contenedorProductos");
let cardComprar;
const numero = document.querySelector("#numero");
let carrito;
let productosEnCarritoLS = localStorage.getItem("producto-en-carrito");


//funciones
function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="card-img" src="${producto.img}" alt="${producto.nombre}">
        <div class="card-detalles">
            <h3 class="card-titulo">${producto.nombre}</h3>
            <p class="card-precio">$${producto.precio}</p>
            <button class="card-comprar" id="${producto.id}">Comprar</button>
        </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarComprar();
}

function actualizarComprar() {
    cardComprar = document.querySelectorAll(".card-comprar");
    cardComprar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
//operador avanzado
carrito = JSON.parse(productosEnCarritoLS) || [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoCarrito = productos.find(producto => producto.id === idBoton);
    if (carrito.some(producto => producto.id === idBoton)) {
        const index = carrito.findIndex(producto => producto.id === idBoton);
        carrito[index].cantidad++;
    } else {
        productoCarrito.cantidad = 1;
        carrito.push(productoCarrito);
    }
    actualizarCarrito();
    localStorage.setItem("producto-en-carrito", JSON.stringify(carrito));
}

function actualizarCarrito() {
    let nuevoNumero = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}

cargarProductos();



