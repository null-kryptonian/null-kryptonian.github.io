$(document).on('click', '#add-btn', function (e) {
    // this will prevent form and reload page on submit.
    e.preventDefault();
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var result = addBinary(x, y);
    document.getElementById("y1").value = result;

});

function zeroOneOnly(input) {
    var regex = /[^0-1]/;
    input.value = input.value.replace(regex, "");
}

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
