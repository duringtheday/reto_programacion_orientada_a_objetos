

// // function vehicleDetails() {

// // }

// function Vehiculo(ruedas, pasajeros) {
//     this.ruedas = ruedas;
//     this.pasajeros = pasajeros;
// }
// Vehiculo.prototype.obtenerRuedas = function () {
//     return this.ruedas;
// }
// Vehiculo.prototype.obtenerPasajeros = function () {
//     return this.pasajeros;
// }


// function Auto() {

// }
// Auto.prototype = Object.create(Vehiculo.prototype);

// Auto.prototype.ruedasAuto = function() {
//     return this.ruedasAuto;
// }
// Auto.prototype.numeroPasajeros = function() {
//     return this.numeroPasajeros;
// }
// console.log(Auto(this.ruedasAuto, this.numeroPasajeros));


// function Bicicleta() {

// }
// Bicicleta.prototype = Object.create(Vehiculo.prototype);

// Bicicleta.prototype.ruedasAuto = function() {
//     return this.ruedasAuto;
// }
// Bicicleta.prototype.numeroPasajeros = function() {
//     return this.numeroPasajeros;
// }



// function Camion() {

// }
// Camion.prototype = Object.create(Vehiculo.prototype);

// Camion.prototype.ruedasAuto = function() {
//     return this.ruedasAuto;
// }
// Camion.prototype.numeroPasajeros = function() {
//     return this.numeroPasajeros;
// }



// function Ambulancia() {

// }
// Ambulancia.prototype = Object.create(Vehiculo.prototype);

// Ambulancia.prototype.ruedasAuto = function() {
//     return this.ruedasAuto;
// }
// Ambulancia.prototype.numeroPasajeros = function() {
//     return this.numeroPasajeros;
// }


// function Combi() {

// }
// Combi.prototype = Object.create(Vehiculo.prototype);

// Combi.prototype.ruedasAuto = function() {
//     return this.ruedasAuto;
// }
// Combi.prototype.numeroPasajeros = function() {
//     return this.numeroPasajeros;
// }



// function Moto() {

// }
// Moto.prototype = Object.create(Vehiculo.prototype);

// Moto.prototype.ruedasAuto = function() {
//     return this.ruedasAuto;
// }
// Moto.prototype.numeroPasajeros = function() {
//     return this.numeroPasajeros;
// }






// // Este vehículo tiene 5 ruedas. Puede transportar 5 pasajeros.
// // Este vehículo tiene 2 ruedas. Es un bicicleta de tipo eléctrica.


// Solución para imprimir en la consola de acuerdo al ejercicio:
// function Vehiculo(ruedas, pasajeros) {
//     this.ruedas = ruedas;
//     this.pasajeros = pasajeros;
// }

// Vehiculo.prototype.obtenerRuedas = function () {
//     return this.ruedas;
// }

// Vehiculo.prototype.obtenerPasajeros = function () {
//     return this.pasajeros;
// }

// function Auto(ruedas, pasajeros) {
//     Vehiculo.call(this, ruedas, pasajeros); 
// }

// Auto.prototype = Object.create(Vehiculo.prototype);
// Auto.prototype.constructor = Auto; 

// function Bicicleta(ruedas, tipo) {
//     Vehiculo.call(this, ruedas, 1);
//     this.tipo = tipo;
// }

// Bicicleta.prototype = Object.create(Vehiculo.prototype);
// Bicicleta.prototype.constructor = Bicicleta;

// Bicicleta.prototype.obtenerTipo = function () {
//     return this.tipo;
// }

// function vehicleDetails() {
//     let auto = new Auto(5, 5);
//     console.log(`Este vehículo tiene ${auto.obtenerRuedas()} ruedas. Puede transportar ${auto.obtenerPasajeros()} pasajeros.`);

//     let bicicleta = new Bicicleta(2, "eléctrica");
//     console.log(`Este vehículo tiene ${bicicleta.obtenerRuedas()} ruedas. Es una bicicleta de tipo ${bicicleta.obtenerTipo()}.`);
// }

// vehicleDetails();



// Una aclaración de `constructor`
// let car = new Auto(4, 5);
// console.log(car.constructor); // Outputs: Auto



// Solución para hacer dinámico el ejercicio:
function Vehiculo(ruedas, pasajeros) {
    this.ruedas = ruedas;
    this.pasajeros = pasajeros;
}

Vehiculo.prototype.obtenerRuedas = function () {
    return this.ruedas;
}

Vehiculo.prototype.obtenerPasajeros = function () {
    return this.pasajeros;
}

function Auto(ruedas, pasajeros) {
    Vehiculo.call(this, ruedas, pasajeros); 
}

Auto.prototype = Object.create(Vehiculo.prototype);
Auto.prototype.constructor = Auto;

function Bicicleta(ruedas, tipo) {
    Vehiculo.call(this, ruedas, 1);
    this.tipo = tipo;
}

Bicicleta.prototype = Object.create(Vehiculo.prototype);
Bicicleta.prototype.constructor = Bicicleta;

Bicicleta.prototype.obtenerTipo = function () {
    return this.tipo;
}

function vehicleDetails(event) {
    let vehicleType = event.currentTarget.id; // Get the ID of the clicked input
    let infoBox = document.getElementById(`info_box_${vehicleType}`); // Find the corresponding info box

    // Toggle the visibility of the info box
    infoBox.classList.toggle('show');

    // Update info box content based on vehicle type
    let auto = new Auto(5, 5);
    let bicicleta = new Bicicleta(2, "eléctrica");

    if (infoBox.classList.contains('show')) {
        if (vehicleType.includes('auto')) {
            infoBox.innerText = `Este vehículo tiene ${auto.obtenerRuedas()} ruedas. Puede transportar ${auto.obtenerPasajeros()} pasajeros.`;
        } else if (vehicleType.includes('bicicleta')) {
            infoBox.innerText = `Este vehículo tiene ${bicicleta.obtenerRuedas()} ruedas. Esto es una bicicleta eléctrica.`;
        } else {
            let vehicleName = vehicleType.split('_')[1];
            infoBox.innerText = `Este vehículo es ${vehicleName} y sus datos están por confirmar.`;
        }
    } else {
        infoBox.innerText = ''; // Clear info box content when hiding
    }

    // Log information to console
    console.log(`Este vehículo tiene ${auto.obtenerRuedas()} ruedas. Puede transportar ${auto.obtenerPasajeros()} pasajeros.`);
    console.log(`Este vehículo tiene ${bicicleta.obtenerRuedas()} ruedas. Es una bicicleta de tipo ${bicicleta.obtenerTipo()}.`);
}










// Probando código:

// function vehicleDetails(event) {
//     let auto = new Auto(5, 5);
//     let bicicleta = new Bicicleta(2, "eléctrica");
//     let vehicleType = event.currentTarget.id; // Get the ID of the clicked input
//     let infoBox = document.getElementById(`info_box_${vehicleType}`); // Find the corresponding info box
    
//     if (vehicleType.includes('auto')) {
//         infoBox.innerText = `This vehicle has ${auto.obtenerRuedas()} wheels. It can carry ${auto.obtenerPasajeros()} passengers.`;
//     } else if (vehicleType.includes('moto')) {
//         infoBox.innerText = `This vehicle has ${bicicleta.obtenerRuedas()} wheels. It is an electric bicycle.`;
//     } else {
//         let vehicleName = vehicleType.split('_')[1];
//         infoBox.innerText = `This vehicle is ${vehicleName} and its data is to be confirmed.`;
//     }
    
//     infoBox.classList.add('info-box');
// }

// document.addEventListener('DOMContentLoaded', function() {
//     let inputs = document.querySelectorAll('input[type=image]');
//     inputs.forEach(input => {
//         input.addEventListener('click', vehicleDetails);
//     });
// });

