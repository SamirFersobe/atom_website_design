function isEven(n) {

   return parseInt(n,10) % 2 == 0;
}

function isOdd(n) {
   return Math.abs(parseInt(n,10) % 2) == 1;
}

function turnBorderBlack(){
  var inputs,index;
   inputs = document.querySelectorAll("input");
   for (index = 0; index < inputs.length; ++index) {
    inputs[index].style.border ="2px solid black";
}


}

function turnBorderRed(){
  var inputs,index;
   inputs = document.querySelectorAll("input");
   for (index = 0; index < inputs.length; ++index) {
    inputs[index].style.border ="2px solid red";
  }

}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function myFunction() {
    var x1,x2,x3,x4,text,k,even,odd;
    even = 0;
    odd = 0;
    x1 = document.getElementById("numb").value;
    var x1l = x1.length;
    x2 = document.getElementById("numb2").value;
    var x2l = x2.length;
    x3 = document.getElementById("numb3").value;
    var x3l = x3.length;
    x4 = document.getElementById("numb4").value;
    var x4l = x4.length;

    if (x1l === 4 && x2l===4 && x3l===4 && x4l===4) {
      if(!(isNaN(x1)||isNaN(x2)||isNaN(x3)||isNaN(x4))){
                k = x1+x2+x3+x4;

                for (i = 0; i < k.length; i++) {
                    if(isEven(k[i])){even += 1;}
                    if(isOdd(k[i])){odd+= 1;}}
                if(even == 8 && odd == 8){
                  text = "You have successfully placed your order! You will be redirected shortly.";
                  turnBorderBlack();
                  document.getElementById("demo").innerHTML = text;
                  alert("ありがとうございました!")

                  wait(5000);
                  window.location = "index.html";

                }
                else{
                  text = "もう一回入力してください。";
                  turnBorderRed();
                }
          }else{
            text = "もう一回入力してください。";
            turnBorderRed();
          }
    } else {
        text = "もう一回入力してください。";
        turnBorderRed();
    }

    document.getElementById("demo").innerHTML = text;
}
