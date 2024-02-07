
let saldo = 100000;

// FUNCIONES

function prestamo(saldo){
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
 }    
 
 
 // COMIENZO DE LA GESTION BANCARIA

alert("Bienvenido al banco.");

let claveGuardada="2001";
let= ingresar=false
for (let i=2; i >=0; i--){
    let ingreso =prompt("Ingresa tu clave.");
    if(claveGuardada== ingreso){
        alert("Bienvenido al banco. Ya podes operar.");
        ingresar=true
        break;
    }else{
        alert("Clave incorrecta.");
    }
}

//MENU DEL BANCO

if (ingresar) {    
     

    let opcion=prompt("Elegi una de las siguientes opciones: \n1. Saldo \n2. Retiro de dinero. \n3. Deposito.\nPresiona x para finalizar.")
    while (opcion!="x"){    
        if(opcion==="1"){
            alert("Tu saldo es: $" + saldo)
           
        }else if(opcion==="2"){
            let retiro=parseInt(prompt("Ingresa el monto a retirar."));
            console.log(retiro)
            
            
            if(retiro > saldo){
            
            saldo=prestamo(saldo);
            } 

            saldo= saldo - retiro
        }else if(opcion==="3"){
            let deposito=parseInt(prompt("Ingrese el monto a depositar."));
            saldo=saldo + deposito
            alert("Deposito exitoso, tu saldo es: $" + saldo);
        }else{
            alert("Opcion no disponible.")
        }
        opcion = prompt("Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.");
    }
} else {
    alert("Retendremos tu tarjeta. Comunicate con el Banco");
}



  