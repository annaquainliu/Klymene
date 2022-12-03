
var keyValuePairs = { "quantity1": [0, 30, 35], "quantity2": [0, 40, 45], "quantity3": [0, 40, 45], "quantity4": [0, 30, 80], "quantity5": [0, 80, 200]};
//quantity, price range per each, price range for all

function addToCart(element, type) {
    changeQuantity(type, true);
    element.style.width = "6vw";
    element.style.height = "6vw";
    var text = element.parentNode.childNodes[1];
    text.style.opacity = "1";
    setTimeout(function() {
        element.style.width = "5vw";
        element.style.height = "5vw";
    }, 300);
    setTimeout(function() {
        text.style.opacity = "0";
    }, 1000);
}

function changeQuantity(type, increase) {
    var quantitynum  = keyValuePairs[type][0];
    if (increase) {
        quantitynum++;
    }
    else if (quantitynum != 0) {
        quantitynum--;
    }
    for (var i = 0; i <  document.getElementsByClassName(type).length; i++) {
        keyValuePairs[type][0] = quantitynum;
        document.getElementsByClassName(type)[i].textContent = "QUANTITY: " + String(quantitynum);
    }
    var lowest = quantitynum * keyValuePairs[type][1];
    var highest = quantitynum * keyValuePairs[type][2];
    document.getElementById(type + "Price").textContent = "PRICE RANGE: $" + String(lowest) + " - $" + String(highest);
    findSum();
}

function findSum() {
    var lowestsum = 0;
    var highestsum = 0;
    var quantitySum = 0;
    for (var i = 1; i < 6; i++) {
        var quantity =  keyValuePairs["quantity" + String(i)][0];
        quantitySum += quantity;
        lowestsum += quantity * keyValuePairs["quantity" + String(i)][1];
        highestsum += quantity * keyValuePairs["quantity" + String(i)][2];
    }
    document.getElementById("totalPrice").textContent = "ESTIMATED PRICE: $" + String(lowestsum) + " - $" + String(highestsum);
    document.getElementById("totalQuantity").textContent = "QUANTITY: " + String(quantitySum);
}

var height = document.getElementById('prices').clientHeight;
var heightpx = String(height) + "px";
document.getElementById('background').style.height = heightpx;





