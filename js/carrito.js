  

let productosEnCarrito = localStorage.getItem("producto-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const total = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");



carritoProductos.innerHTML = "";


//funciones y eventos
function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        carritoVacio.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        carritoComprado.classList.add("disabled");
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            console.log(producto);
            div.innerHTML = `
            <img class="carrito-producto-img" src="${producto.img}" alt="${producto.nombre}">
                    <div class="carrito-producto-nombre">
                        <small>Titulo</small>
                        <h3>${producto.nombre}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p>${producto.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>${producto.precio}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Subtotal</small>
                        <p>${producto.precio * producto.cantidad}</p>
                    </div>
                    <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
            `;
            carritoProductos.append(div);
        })
    } else {
        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }
    actualizarBotonEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonEliminar() {
    const botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}


function eliminarDelCarrito(e) {
    Toastify({
        text: "Eliminaste del carrito",
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
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    if (index !== -1) {
        productosEnCarrito.splice(index, 1);
        
        const productoEliminado = document.getElementById(idBoton);
        productoEliminado.parentNode.removeChild(productoEliminado);
        
        
        actualizarTotal();
        
        localStorage.setItem("producto-en-carrito", JSON.stringify(productosEnCarrito));
    }
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito = [];
    localStorage.setItem("producto-en-carrito", JSON.stringify(productosEnCarrito))
    cargarProductosCarrito();
}

function actualizarTotal() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
        total.innerText = `$${totalCalculado}`;
    } else {
        total.innerText = "$0";
    }
}



botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
    productosEnCarrito = [];
    localStorage.setItem("producto-en-carrito", JSON.stringify(productosEnCarrito))
    carritoVacio.classList.add("disabled");
    carritoProductos.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.remove("disabled");
}