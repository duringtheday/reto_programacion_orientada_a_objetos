class Vehiculo {
    constructor(ruedas, pasajeros) {
        this.ruedas = ruedas;
        this.pasajeros = pasajeros;
        // console.log(`Vehículo creado con ${ruedas} ruedas y ${pasajeros} pasajeros`);
    }

    obtenerRuedas() {
        return this.ruedas;
    }

    obtenerPasajeros() {
        return this.pasajeros;
    }
}

class Auto extends Vehiculo {
    constructor(ruedas, pasajeros) {
        super(ruedas, pasajeros);   
        // console.log(`Auto creado con ${ruedas} ruedas y ${pasajeros} pasajeros`);
    }
}

class Bicicleta extends Vehiculo {
    constructor(ruedas, tipo) {
        super(ruedas, 1);
        this.tipo = tipo;
        // console.log(`Bicicleta creada con ${ruedas} ruedas y tipo ${tipo}`);
    }

    obtenerTipo() {
        return this.tipo;
    }
}

// Simulate a click event handler in Node.js
function vehicleDetails(vehicleType) {
    // console.log("vehicleDetails called");

    let infoBox = {}; // Mock object for demonstration

    // Toggle the visibility of the info box
    if (!infoBox.show) {
        infoBox.show = true;
    } else {
        infoBox.show = false;
    }

    // Update info box content based on vehicle type
    let auto = new Auto(5, 5);
    let bicicleta = new Bicicleta(2, "eléctrica");

    if (infoBox.show) {
        if (vehicleType.includes('auto')) {
            console.log(`Este vehículo tiene ${auto.obtenerRuedas()} ruedas. Puede transportar ${auto.obtenerPasajeros()} pasajeros.`);
        } else if (vehicleType.includes('bicicleta')) {
            console.log(`Este vehículo tiene ${bicicleta.obtenerRuedas()} ruedas. Esto es una bicicleta eléctrica.`);
        } else {
            let vehicleName = vehicleType.split('_')[1];
            console.log(`Este vehículo es ${vehicleName} y este dato está por confirmar.`);
        }
    } else {
        console.log(''); // Clear info box content when hiding
    }
}

// For debugging, you can simulate a click event like this:
vehicleDetails('auto_2');
vehicleDetails('bicicleta_3');
