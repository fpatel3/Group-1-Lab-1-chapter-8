/* define functions here */


var price = document.getElementsByClassName("price");
var item = document.getElementsByClassName("noOfItem");

console.log(price.value);
console.log(dataArray);
// for loop on dataArray

var i;
for (i = 0; i < dataArray.length; i++) {
    //console.log(dataArray[i].price);
    //console.log(dataArray[i].quantities);
    console.log(calculatetotal(dataArray[i].price, dataArray[i].quantities));
    var totalAmount = calculatetotal(dataArray[i].price, dataArray[i].quantities);

    var amount = document.getElementsByClassName("amount");
    amount.value = totalAmount.toFixed();    //added code by vaidehi
}

function calculatetotal(item ,price) {
    return item * price;
}

function outputCartRow(file, title, quantity, price, total)

{
    var i = o;
    for (i = 0; i < dataArray.length; i++) {
       
        console.log(calculatetotal(dataArray[i].price, dataArray[i].quantities));
        var totalAmount = calculatetotal(dataArray[i].price, dataArray[i].quantities);
        document.getElementsByClassName("amount");  //vaidehi 
}



