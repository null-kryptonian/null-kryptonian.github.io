$(document).on('click', '#dec-add-btn', function (e) {
    // this will prevent form and reload page on submit.
    e.preventDefault();
    var dec1 = document.getElementById("dec1").value;
    var dec2 = document.getElementById("dec2").value;
    var bin1 = convertToBinary(dec1);
    var bin2 = convertToBinary(dec2);
    var result = addBinary(bin1.toString(), bin2.toString());
    document.getElementById("decResult").value = result;

});

$(document).on('click', '#bin-add-btn', function (e) {
    // this will prevent form and reload page on submit.
    e.preventDefault();
    var bin1 = document.getElementById("bin1").value;
    var bin2 = document.getElementById("bin2").value;
    var result = addBinary(bin1, bin2);
    document.getElementById("binResult").value = result;

});

function allDigits(input) {
    var regex = /[^0-9]/;
    input.value = input.value.replace(regex, "");
};

function zeroOneOnly(input) {
    var regex = /[^0-1]/;
    input.value = input.value.replace(regex, "");
};

function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
};

function addBinary(a, b) {
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    var result = "";
    while (i >= 0 || j >= 0) {
        var m = i < 0 ? 0 : a[i] | 0;
        var n = j < 0 ? 0 : b[j] | 0;
        carry += m + n; // sum of two digits
        result = carry % 2 + result; // string concat
        carry = carry / 2 | 0; // remove decimals,  1 / 2 = 0.5, only get 0
        i--;
        j--;
    }
    if (carry !== 0) {
        result = carry + result;
    }
    return result;
};
