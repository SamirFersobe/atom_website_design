
var x;
// Begin features
document.writeln( '<div class="feature">' );
// Note that for my personal solution, I am maintaining a separate list of popular items
// and a separate list of all the other items. Yu may have done things a little differently
for (x in catalog ) {
	if ( x === "人気にある商品"){
		///Build the header
		document.writeln( '<div class=feature-text>');
		document.write( x );
		document.writeln( '</div>');

		// build feature container
		document.write( '<div class="feature-container">' );
		var currentItems = catalog[x];
		for ( var i = 0; i < currentItems.length; i++) {
			document.writeln('<div class="feature-box shadow">');
			//Adding the  images
			document.write('<img src="');
			document.writeln(currentItems[i].itemImageSrc);
			document.write('" alt="');
      document.write(currentItems[i].itemImageAlt);
			document.writeln('">');
			//adding item description
			document.write('<div class="feature-box-model">');
			document.write(currentItems[i].itemDescription);
			document.writeln('</div>');
			// Adding price tag
			document.write('<div class="feature-box-price">');
			document.write(currentItems[i].itemPrice);
			document.writeln('</div>');

			// I construct a unique id for each item with the prefix
			// add-to-Cart, it's category (which forms a title) and a unique integer

			var id = "addToCart" + x + i;
			// <button id="id" type="button">Add To Card </button><br>
			document.write('<button id="');
			document.writeln( id + '" type="button">カートに追加</button><BR>');

			// Here is that crazy 'let' operator we learned earlier in the year. Sure is useful

			let c = currentItems[i];
			document.getElementById( id ).addEventListener("click", function(){addToShoppingList(c)});

			document.writeln('</div>');

		}
		document.writeln('</div>  <!-- end of feature-container-->');
		document.writeln('<div class="clearboth"></div>');

	}

}


function addToShoppingList(item) {
alert(item.itemDescription + " has been added to your shopping cart.");
if (typeof(Storage) !== "undefined") {
		if(localStorage.getItem(item.itemDescription)=== null){
    localStorage.setItem(item.itemDescription, "1");
		}
		else{
			var n = Number(localStorage.getItem(item.itemDescription))+1;
			var s = String(n);
			localStorage.setItem(item.itemDescription,s);
			//alert(localStorage.getItem(item.itemDescription));
		}

}
}
