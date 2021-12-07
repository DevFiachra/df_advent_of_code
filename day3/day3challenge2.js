
let testData = ["00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010", "01010"]

function  lifeSupport(data){
    
}


function toBinary(inputToBinary){ 
    return parseInt(inputToBinary, 2);
};

function returnArray(arr, zeroOrOne) {
    
    for (let i = 0; i < arr[0].length; i++) {

        let zero = 0;
        let one = 0;

        for(let k = 0; k < arr.length; k++) {

            if (arr[k][i] === "0") {
                zero++;
            }
            
            if (arr[k][i] === "1") {
                one++;
            }

        }

        if (zero === one && arr.length > 1) {

        }

        if (zero > one && arr.length > 1) {
            
        }

        if (one > zero && arr.length > 1) {
            
        }

        if (arr.length === 1) {
            return arr
        }

    }
}


console.log(binaryDiagnostic(testData));