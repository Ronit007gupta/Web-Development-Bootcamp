function one(){
    window.alert("You are Practicing JS");
}

function two(){
    document.getElementById("loco").innerHTML = "There is Some secrets Of Universe";
    document.getElementById("loco").style.color = "red";
    document.getElementById("loco").style.textAlign = "Center";
    document.getElementById("loco").style.fontWeight = "bold";
    document.getElementById("loco").style.fontFamily = "times new roman";
}

function three(){
    console.log("You are in console mod Now do something great");
    document.getElementById("coco").innerHTML = "BE HAPPY AND INTROVERT";
    document.getElementById("coco").style.color = "orangered";
    document.getElementById("coco").style.textAlign = "Center";
    document.getElementById("coco").style.fontWeight = "bold";
    document.getElementById("coco").style.fontFamily = "times new roman";
    document.getElementById("coco").style.fontSize = "70px";

}

function four(){
    window.alert(" Can you solve this Problem");
    window.alert(" Ques1 1000-847");

    var x , y , z;
    x = 1000;
    y = 847;
    z = x-y;
    
    document.getElementById("moco").innerHTML = z;
    document.getElementById("moco").style.color = "blue";
    document.getElementById("moco").style.textAlign = "center";
    document.getElementById("moco").style.fontSize = "80px";
    document.getElementById("moco").style.fontWeight = "bold";
}

function fifth(){
  document.getElementById("doco").innerText = "Depression is not Real Feeling depressed is Real you Need yo constantly work Hard for Success you need to perform some action So that God will not frown upon you";
  document.getElementById("doco").style.color = "green";
    document.getElementById("doco").style.textAlign = "center";
    document.getElementById("doco").style.fontSize = "50px";
    document.getElementById("doco").style.fontWeight = "bold";


}

function sixth(){
    window.close("")
}

function seventh(){
    document.getElementById("bgk").style.backgroundColor = "yellow";
}

function jno(){
    let p = document.getElementById("one").value;
    let q = document.getElementById("two").value;
    let z = document.getElementById("big").innerHTML = ("Your Name is " + p + q);
}

function bright(){
    let x = document.getElementById("brightness").value;
    let y = document.getElementById("pic1").style.filter = "brightness("+x+"%)"
    let z = document.getElementById("pic2").style.filter = "brightness("+x+"%)"
}

function contrast(){
    let x = document.getElementById("contrastness").value;
    let y = document.getElementById("pic1").style.filter = "contrast("+x+"%)"
    let z = document.getElementById("pic2").style.filter = "contrast("+x+"%)"
}

function saturate(){
    let x = document.getElementById("saturated").value;
    let y = document.getElementById("pic1").style.filter = "saturate("+x+"%)"
    let z = document.getElementById("pic2").style.filter = "saturate("+x+"%)"
}

function test(){
    var x = document.getElementById("user").value;
    x=="Ronit Gupta" ? window.alert("user found") : window.alert("user not found");
}













