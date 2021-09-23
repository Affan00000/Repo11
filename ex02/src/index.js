// Create a temps array here
var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
// End of temps array
function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    var suma = 0;
    // Only change code below this line
    for (let i = 0; i < newTemps.length; i++) {
        for (let i = 0; i < newTemps.length; i++) {

            suma+=newTemps[i][j];
        }
        averageDayTemp.push(suma/newTemps.length)
        suma=0;        
        
        
    }
    // Only change code above this line
    return averageDayTemp;
    
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;