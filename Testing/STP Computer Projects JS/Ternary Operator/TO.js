function oddeven (){
    let x = document.getElementById("user").value;
     let result = x%2==0 ? "Even No." : "Odd No.";
     let p = document.getElementById("inside").innerHTML = result;
}