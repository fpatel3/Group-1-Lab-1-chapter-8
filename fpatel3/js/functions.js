document.getElementById;
function calculateTotal(quantity,price)
{
  var calculateTotal = quantity * price;
 
}

for(i=0;i<=3;i++)
{
var file= filenames[i];
var title = titles[i];
var quantity = quantities[i];
var price = prices[i];
var total = calculateTotal();

function outputCartRow(file,title,quantity,price,total)
{
    console.log(file,title);
    quantity.toFixed(2);
    price.toFixed(2);
    total.toFixed(2);

    var data = [file,title,quantity,price,total];
    document.write(data);
}
console.log(outputCartRow());

 
}

