let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })
    

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
    Toastify({
        text: "Agregaste al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, red, blueviolet )",
          borderRadius: "1.5rem",
          fontSize: "0,5rem"
        },
        onClick: function(){} // Callback after click
      }).showToast();
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





