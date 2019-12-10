const fs = require("fs");

(async () => {
    const masses = await readFile('input.txt');
    const total = process(masses);
    console.log(total);
})();

function fuelCounterUpper(moduleMass) {
    let fuelMass = Math.floor(moduleMass / 3);
    fuelMass = fuelMass - 2;
    if (fuelMass <= 6) return fuelMass;
    return fuelMass + fuelCounterUpper(fuelMass);
}

function validateInput(input) {
    if (isNaN(input)) {
        console.log('encountered not a number in file');
        exit();
    } else {
        return input;
    }
}

async function readFile(path) {
    return new Promise((resolve, reject) => {
        return fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            else {
                resolve(data.trim().split('\n'));
            }
        });
    });
}

function process(masses) {
    return masses.map(mass => validateInput(mass))
        .map(mass => fuelCounterUpper(mass))
        .reduce((a, b) => { return a + b }, 0);
}
