// calculate tip
function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById('serviceQuality').value;
    var numOfPeople = document.getElementById("peopleAmount").value;

    // validate input
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values.")
        return;
    }
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("peopleAmount").innerHTML = numOfPeople;
        
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //calculating tip
    var total = (billAmount * serviceQuality) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line for showing two digits after decimal point
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total; 
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call calculate tip function
document.getElementById("calculate").onclick = function() {
    calculateTip();
}