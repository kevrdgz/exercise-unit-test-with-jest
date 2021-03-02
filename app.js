// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}



// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}

const fromDollarToYen = function(monto){
    // convert the given valueInEuro to dollars
    
    let dollaraeuros = monto * 1.2;
    let resultado = dollaraeuros * 127.9;
    //return the doller value
    return resultado;
}

const fromYenToPound = function(monto2){
    // convert the given valueInEuro to dollars
    
    let yenaeuros = monto2 / 127.9;
    let resultado2 = yenaeuros * 0.8;
    //return the doller value
    return resultado2;
}


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
