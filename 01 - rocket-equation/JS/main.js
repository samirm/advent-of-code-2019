// import { readFile } from 'fs';
const fs = require("fs");

function fuelCounterUpper(mass) {
    let fuel = Math.floor(mass/3);
    fuel = fuel - 2;
    // console.log(fuel);
    return fuel;
}

function validateInput(input) {
    if (isNaN(input)) {
        console.log('encountered not a number in file');
    } else {
        return input;
    }
}

    let masses = [];

    fs.readFile('masses.txt', 'utf8', (err, data) => {
        if (err) console.log(err);
        else { 
            // console.log(data); 
            masses = data.trim().split('\n');
            // console.log(masses);
            process(masses);
        }
    });

    function process(masses) {
        const total = masses.map(mass => validateInput(mass))
            .map(mass => fuelCounterUpper(mass))
            .reduce((a, b) => { return a + b }, 0);
        console.log(total);
    }
