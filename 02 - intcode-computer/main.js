var fs = require('fs');


(async () => {
    let intcodes = await readFile('input.txt');
    // console.log(data);
    console.log(intcodes);
    if (!validateContents(intcodes)) console.log('contents invalid');
    intcodes[1] = 12;
    intcodes[2] = 2;
    process(intcodes);
    console.log(intcodes);
    console.log('answer: ' + intcodes[0]);
})();

function process(intcodes) {
    for (let i = 0; i <= intcodes.length; i += 4) {
        console.log(intcodes[i]);
        switch (intcodes[i]) {
            case 99:
                //halt
                console.log('should return');
                return;
            case 1:
                //add
                result = intcodes[intcodes[i + 1]] + intcodes[intcodes[i + 2]];
                intcodes[intcodes[i + 3]] = result;
                break;
            case 2:
                //multiply
                result = intcodes[intcodes[i + 1]] * intcodes[intcodes[i + 2]];
                intcodes[intcodes[i + 3]] = result;
                break;
            default:
                console.log('something got fucked yo');
        }
    }
}

async function readFile(path) {
    return new Promise((resolve, reject) => {
        return fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data.trim().split(',').map(code => code = parseInt(code)));
        });
    });
}

function validateContents(intcodes) {
    intcodes.forEach(element => {
        result = isNaN(element) ? false : true;
        if (!result) return false;
    });
    return true;
}