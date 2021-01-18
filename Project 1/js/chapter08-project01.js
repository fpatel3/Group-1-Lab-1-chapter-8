/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

   function loadcart() {
      var subtotal = 0.0, tax, shipping, grandtotal;
  
      shipping = subtotal > 1000 ? 0 : 40;
      grandtotal = subtotal + tax + shipping;
  
  
      outputTotalsRow("subtotal", subtotal, "Amount");
      outputTotalsRow("tax", tax, "Amount");
      outputTotalsRow("shipping", shipping, "Amount");
      outputTotalsRow("grandtotal", grandtotal, "totalAmount");
  
  }
  
  
  