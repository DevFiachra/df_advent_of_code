function icecreamParlor(m, arr) {
        
    //let flavourCombos = [];
    
    for (let i = 0; i < arr.length; i++){
        
        for (let k = 0; k < arr.length; k++){
            if(arr.indexOf(arr[i]) != arr.indexOf(arr[k]) && (arr[i] + arr[k]) - m === 0){
                
                //flavourCombos.push([arr.indexOf(arr[i]) + 1, arr.indexOf(arr[k]) + 1]);

                return [arr.indexOf(arr[i]) + 1, arr.indexOf(arr[k]) + 1]
            
            }
        }
    }
    
    //return flavourCombos;    

}

console.log(icecreamParlor(6, [1,2,3,4,5,6]))