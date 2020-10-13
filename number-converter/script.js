var unit1 = document.getElementById("unit1");
var unit2 = document.getElementById("unit2");
var value1 = unit1.options[unit1.selectedIndex].value;
var value2 = unit2.options[unit2.selectedIndex].value;

// var text = e.options[e.selectedIndex].text;

$(document).on('click', '#convert-btn', function (e) {
    // this will prevent form and reload page on submit.
    e.preventDefault();
    var unit1 = document.getElementById("unit1");
    var unit2 = document.getElementById("unit2");
    var value1 = unit1.options[unit1.selectedIndex].value;
    var value2 = unit2.options[unit2.selectedIndex].value;

    if(value1 === "Decimal" && value2 === "Binary") {
        var x = document.getElementById("x").value;
        var binary = convertToBinary(x);
        var onesComp = onesComplement(binary);
        document.getElementById("y").value = binary;
        document.getElementById("y1").value = onesComp;
        // document.getElementById("y2").value = binary;
    } else if(value1 === "Binary" && value2 === "Decimal") {
        var x = document.getElementById("x").value;
        var decimal = convertToDecimal(x)
        var binary = convertToBinary(x)
        document.getElementById("y").value = decimal;
        // document.getElementById("y1").value = binary;
        // document.getElementById("y2").value = binary;
    }
});

$(document).on('click', '#reset-btn', function (e) {
    // this will prevent form and reload page on submit.
    e.preventDefault();
    document.getElementById("x").clear;
});


function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
}

function onesComplement(x) {
    let comp = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 10;
        if(rem === 1) {
            rem = 0;
            rem *= i
            comp += rem;
            i *= 10;
        } else {
            rem = 1;
            rem *= i
            comp += rem;
            i *= 10;
        }
        x = parseInt(x / 10);
    }
    return comp;
}

function convertToDecimal(x) {
    let dec = 0, i = 0, rem;
    while (x != 0) {
        rem = x % 10;
        x = parseInt(x / 10);
        dec += rem * Math.pow(2, i);
        ++i;
    }
    return dec;
}