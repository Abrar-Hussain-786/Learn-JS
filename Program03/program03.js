var math = parseInt ( prompt ("Enter Mathmatics marks") );
var phy = parseInt ( prompt ("Enter Physics marks") );
var chem = parseInt ( prompt ("Enter Chemistry marks") );
if ( math <= 100 && phy <= 100 && chem <= 100){
    var average = (math + phy + chem) / 3  
} else {
    alert("Enter marks between 0 to 100")
}
if (average >= 80){
    alert ( "you are above standard, Admission Granted!" );
} else {
    alert ( "Better Luck next time" );
}