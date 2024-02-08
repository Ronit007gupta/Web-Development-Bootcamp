function clickme(){
    var x = document.getElementById("clickhd");
    x.innerHTML = "Enter Minimum 8 Digit Number";
    x.style.color = "orangered";
    x.style.fontWeight = "bold";
}

function addme(){
    let x = document.getElementById("clickhd");
    x.style.display = "none";

    let y = document.getElementById("loader");
    y.style.opacity = 1;

    let z = document.getElementById("tick");

    let p = document.getElementById("password").value;
    let len = p.length;

    len>8 ? z.style.opacity = 1 : y.style.opacity = 1;
    len>8 ? y.style.opacity = 0 : z.style.opacity = 0;
    len>8 ? y.style.display = "none" : z.style.opacity = 0;

}








