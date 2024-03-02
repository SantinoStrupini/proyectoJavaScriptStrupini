


// FUNCIONES

/* function prestamo(saldo){
    console.log(saldo);
            
    alert("Tu saldo es insuficiente")
    let eleccion=prompt("Pedi un prestamo: \nA. $100.000 \nB. $200.000 \nC. $500.000");
                if(eleccion === 'A' || eleccion === 'B' || eleccion === 'C'){
                    let prestamo;
                    if(eleccion==='A'){
                        prestamo=100000;
                        saldo= prestamo + saldo
                        alert("Tasa de interes mensual: 5%")
                        
                         
                    }else if(eleccion==='B'){
                        prestamo=200000
                        saldo= prestamo + saldo
                        alert("Tasa de interes mensual: 10%")
                        console.log(saldo + 2);
                    }else if(eleccion==='C'){
                        prestamo=500000
                        saldo= prestamo + saldo
                        alert("Tasa de interes mensual: 15%")
                        
                    }
                    
                    alert("Prestamo exitoso. Tu saldo es de: $" + saldo);
                    
                }else{
                    alert("Opcion no valida")
                }
        return saldo
 }     */
 
 
 
//carrito de compras

const productos = [
   {nombre: "1-Remera basica blanca", precio: 10000},
   {nombre: "2-Remera basica negra", precio: 10000},
   {nombre: "3-Remera basica gris", precio: 12000},
   {nombre: "4-Remera basica azul", precio: 14000},
   {nombre: "5-Remera basica roja", precio: 13000},
   {nombre: "6-Remera basica beige", precio: 15000}
];

const talles = [
    {nombre: "XS"},
    {nombre: "S"},
    {nombre: "M"},
    {nombre: "L"},
    {nombre: "XL"},
    {nombre: "XXL"}
]

const carrito = [];


    function carritoDeCompra() {
        let seleccion= prompt("Bienvenido, desea comprar nuestras remeras basicas?");
    
        while(seleccion != "si" && seleccion != "no"){
            alert("Ingrese si o no")
            seleccion= prompt("Bienvenido, desea comprar nuestras remeras basicas?");
        }
    
        if(seleccion === "si"){
            alert("A continuacion le dejamos nuestro stock disponible")
            let misProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio );
            alert(misProductos.join("\n"))
        } else if (seleccion === "no"){
            alert("Gracias por venir")
            return;
        }
    
        
    
        do {
            let producto= prompt("Ingrese un producto.");
            let precio = 0;
            if(producto === "remera basica blanca" || producto === "remera basica negra" || producto === "remera basica gris" || producto === "remera basica azul" || producto === "remera basica roja" || producto === "remera basica beige"){
                switch(producto){
                    case "remera basica blanca":
                        precio=10000;
                        break;
                    case "remera basica negra":
                        precio=10000;
                        break;
                    case "remera basica gris":
                        precio= 12000;
                        break;
                    case "remera basica azul":
                        precio= 14000;
                        break;
                    case "remera basica roja": 
                        precio=13000;
                        break;
                    case "remera basica beige":
                        precio= 15000;
                        break;
                    default:
                        break;
                }
                let misTalles = talles.map((talle) => talle.nombre + " ");
                
                let talle= prompt("Seleccioneun talle \n" + misTalles.join("\n"));
                
                if(talle === "xs" || talle === "s" || talle === "m" || talle === "l" || talle === "xl" || talle === "xxl"){
                    switch(talle){
                        case "xs":
                            talle="xs";
                            break;
                        case "s":
                            talle="s";
                            break;
                        case "m":
                            talle= "m";
                            break;
                        case "l":
                            talle= "l";
                            break;
                        case "xl": 
                            talle="xl";
                            break;
                        case "xxl":
                            talle= "xxl";
                            break;
                        default:
                            break;
                    }
                }
                
                let prendas = parseInt(prompt("Cuantas prendas quiere llevar"));
                carrito.push({producto, talle, prendas, precio});
            } else {
                alert("No tenemos ese producto");
            }
         
            seleccion = prompt("Quiere agregar mas productos");
        } while(seleccion === "si");
    
        alert("Gracias por comprar.");
        carrito.forEach((carritoFinal)=>{
            alert(`Producto: ${carritoFinal.producto}, Talle: ${carritoFinal.talle}, Prendas: ${carritoFinal.prendas}, Total a pagar: $${carritoFinal.prendas * carritoFinal.precio}`);
        });
        const total = carrito.reduce((acc, el)=> acc + el.precio * el.prendas, 0);
        alert(`Total a pagar: $${total}`)    
    }
    
carritoDeCompra();



