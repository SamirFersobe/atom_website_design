
var buttonListeners= {};
var shoppingList;

var whereIsMouse = "icon";

function init() {
    document.getElementById("icon").addEventListener("mouseover", function(){
	iconMouseover("0.5");
    });

    document.getElementById("cart").addEventListener("mouseover", function(){
	cartMouseover("0.5");
    });

    var menuItems = document.getElementsByClassName("menu-item");
    for (let i=0; i < menuItems.length; i++) {
 		menuItems[i].addEventListener("mouseover", function() {
 	    	menuItemMouseover(i, "0.5");
 		});
    }

    window.addEventListener("resize", function() {
     	if (whereIsMouse == "cart")  {
    		cartMouseover("0");
    	}
    	else if (whereIsMouse == "icon" )  {
	    iconMouseover("0");
    	}
    	else {
    	    menuItemMouseover(parseInt( whereIsMouse[4] ), "0")
    	}
    });
/*
    for (var btn in buttonListeners ) {
    	let b = btn;
//    	alert( "puke " + btn );
    	document.getElementById( btn ).addEventListener("click", function(){
//    		alert("hi cart");
    		addToCart(b);
    		alert("fine");
    	});
    }
    */
 }

 function init2 () {
 /*
 	alert( "in init2");
     for (var btn in buttonListeners ) {
    	let b = btn;
//    	alert( "puke " + btn );
    	document.getElementById( btn ).addEventListener("click", function(){
//    		alert("hi cart");
    		addToCart(b);
    		alert("fine in init2");
    	});
    }
*/
 }

function iconMouseover(v) {
	var line = document.getElementById("underline");
	line.style.transition = "left " + v + "s"
	line.style.width = (160 + "px");
	line.style.left = 0 + "px";
	whereIsMouse = "icon";
}


function cartMouseover(v) {
	var pageWrapWidth = document.getElementById("page-wrap").offsetWidth;
	var line = document.getElementById("underline");
	line.style.transition = "left " + v + "s"
	line.style.width = 68 + "px";
	line.style.left = (pageWrapWidth - 68) + "px"; /*38 px for the width of the icon, 20 px for padding on the right, 10 for padding on the left*/
	whereIsMouse = "cart";
}


function menuItemMouseover(ind,v) {
	var pageWrapWidth = document.getElementById("page-wrap").offsetWidth;
	var line = document.getElementById("underline");
	line.style.transition = "left " + v + "s"
	whereIsMouse = "item" + ind;
	line.style.width = 74 + "px";
	line.style.left = (pageWrapWidth - 68) - (74 * ( 1 + ind) ) + "px";
}

function addToCart(item) {
	shoppingList.push(item);
	alert( " added to cart" + item);
	alert( "shopping list is " + shoppingList );
}
