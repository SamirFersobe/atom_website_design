
var finalQuantity=0;
var FinalTotal=0;
    for (var i = 0; i < localStorage.length; i++){
      var price;
      var total;
        var quantityString = localStorage.getItem(localStorage.key(i));
        var quantity = Number(quantityString);
        for(x in catalog){
          if (true){
            var currentItems = catalog[x];
            for ( var g = 0; g < currentItems.length; g++){
              //alert(currentItems[g].itemDescription);
              if(String(currentItems[g].itemDescription) === String(localStorage.key(i))){
                price = currentItems[g].itemPrice;
              }
            }
          }
        }
        total = quantity*price;
        total = Math.round(total * 100) / 100;

      FinalTotal = FinalTotal+ total;
      finalQuantity= quantity+ finalQuantity

    }

    FinalTotal = Math.round(FinalTotal * 100) / 100;

    if(finalQuantity%2 === 0){
    document.writeln('<h2>¥ '+ FinalTotal +'0</h2>');
  }else {
    document.writeln('<h2>¥ '+ FinalTotal +'</h2>');

  }


document.writeln('')
