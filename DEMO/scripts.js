/*document.getElementById("frms");
frames.onsubmit = function(){
    var x = document.getElementById("user_name") .value;
    var y = document.getElementById("repeat").value;
    var i;

    for(i = 1; i<=y;i++){
        document.write(i+ " "+x + "<br>");

    }
}



var x = document.getElementById("films");
x.onsubmit = function(){
    var y = document.getElementById("tav").value;
    var i;
    for(i=1;i<=10;i++){
        document.write(y*i + "<br>");
    }
}*/


/*var arr = ["Trading","Investing","Financing","Journalising","Account Growing"];

let i ;
for(i = 0;i<arr.length;i++){
    window.alert(arr[i]);
}*/

/*var x = document.getElementById("doc");
x.onsubmit = function(){
    var y = document.getElementById("numb").value;
    var i;
    for(i=1;i<y;i++){

        if(i%2 ==0){
            document.write(i + "<br>");
        }
        
    }
}
*/

/*var x = document.getElementById("docs");
x.onsubmit = function(){
    var y = document.getElementById("numbs").value;
    var i;
    var j = 0;

    for(i = 0;i<=y;i++){
        j = j+i;
    }
    alert(j);
    
    }*/


    /*Now We are making time interval function  */

    /*var x = document.getElementById("start");
    var y = document.getElementById("stop");
    var z = document.getElementById("result");
    var num = 5000000;
    var empty;

    x.onclick = function(){

        function demo(){
            z.innerHTML = num++;
        }
         empty = setInterval(demo,0);

         if(z.innerHTML ==30000000){
            clearInterval(empty);
         }
    }

    y.onclick = function(){

        clearInterval(empty);

   }*/

   /*let head = document.getElementById("heading");*/
   /*let button = document.getElementById("prac");

   button.onclick = function(){
   var x = prompt("What do you want jut type here ")
    var a = x.value;
    document.write(x);
   }

   var a = document.getElementById("fwd");
   var b = document.getElementById("bwd");

   a.onclick = function(){
    history.forward();
   }

   b.onclick = function (){
    history.back();
   }

   document.onkeydown = function(a){
    if(a.ctrlKey && a.keyCode == 85){
        alert("View Page Source is Not Allowed");
        return false;
    }

    if(a.ctrlKey && a.keyCode == 73 && a.shiftKey){
        alert("Inspect is Not Allowed");
        return false;
    }
   }*/


   var x = document.getElementById("btnn");

   x.onclick = function(){

    var cu = document.getElementById("count_up").innerHTML;
    //var cd = document.getElementById("count_down").innerHTML;

    var up = 1;
    //var down = 10;

    var startup = setInterval(timerup,900);
    function timerup(){
        cu = up++ ;

        if(cu > 10){
            clearInterval(startup);
        }
    }



   /* var startdown = setInterval(timerdown,900);
    function timerdown(){
        cd = down-- ;
    }

    if(cd < 1){
        clearInterval(startdown);
    }*/

   }

    
        

   

  

   
















