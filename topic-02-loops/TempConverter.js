// Exercise 6 — Temperature Converter 
// Functions, operators, math, switch
// Instructions:

// Write a function called convertTemp that accepts two parameters: temp and unit
// Use a switch statement on the unit
// If unit is "C" convert Celsius to Fahrenheit: (temp * 9/5) + 32
// If unit is "F" convert Fahrenheit to Celsius: (temp - 32) * 5/9
// If unit is "K" convert Kelvin to Celsius: temp - 273.15
// Default should console log "Invalid unit."
// Round all results to 1 decimal place
// Test with at least 3 calls using different units

function convertTemp(temp,unit){
    switch(unit){
        case 'C':
            console.log(((temp * 9/5) + 32).toFixed(1))
            break;
        case 'F':
            console.log(((temp - 32) * 5/9).toFixed(1))
            break;
        case 'K':
            console.log((temp - 273.15).toFixed(1))
            break;
        default:
            console.log("Invalid unit")
    }
}
convertTemp(40,'K');
convertTemp(80,'F');
convertTemp(40,'C');
