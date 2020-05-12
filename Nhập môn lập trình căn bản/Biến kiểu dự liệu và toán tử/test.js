
function showMessage() {

    var x = document.getElementById("box1").value;
    var y = document.getElementById("box2").value;
    var z = parseFloat(document.getElementById("amount").value);
    if ((x=="VND")&&(y=="USD")) {document.getElementById("result").innerHTML="Result:"+(z/23000)+" USD";}
    if ((x=="USD")&&(y=="VND")) {document.getElementById("result").innerHTML="Result:"+(z*23000)+" VND";}
    if ((x=="USD")&&(y=="USD")) {document.getElementById("result").innerHTML="Result:"+(z)+" USD";}
    if ((x=="VND")&&(y=="VND")) {document.getElementById("result").innerHTML="Result:"+(z)+" VND";}

}