function checkLifeLeft( age ) {
    
    var lifeExpectancy = 90;
    var yearsLeft = lifeExpectancy - age;

    checkDaysLeft( yearsLeft );
} 

function checkDaysLeft( yearsLeft ) {
    var currentYear = new Date().getFullYear();
    console.log("You gonna die in " + ( currentYear + yearsLeft ) );
    
    var daysLeft = 0; 
    var leapYears = 0;

    for ( var i = currentYear + 1; i <= ( currentYear + yearsLeft ); i++ ) {
        if ( ( i % 4 ) != 0 ) {
            daysLeft += 365;
        } else if ( ( ( i % 100 ) == 0 )  &&  ( ( i % 400 ) != 0 ) ) {
            daysLeft += 365;
        } else {
            daysLeft += 366;
            leapYears++;
        }
    }

    var weeksLeft = Math.floor( daysLeft / 7 );
    var monthsLeft = yearsLeft * 12;

    console.log( "You have " + daysLeft + " days left, " + weeksLeft + " weeks left and " + monthsLeft + " months left!!" );
    console.log( "The number of leap years are " + leapYears );
}

checkLifeLeft( 56 );