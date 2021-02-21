function calculateBMI( weight, height ) {
    var BMI = weight / Math.pow( height, 2 );
    return BMI;
}

var weight = prompt( "What's your weight in kgs?" );
var height = prompt( "What's your height in ms?" );
alert( "Your BMI is " + calculateBMI( weight, height ).toPrecision( 4 ) + "." );