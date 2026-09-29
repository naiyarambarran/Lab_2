
document.getElementById('title1').innerHTML = "Lab 2";
document.getElementById('title1').style.backgroundColor = "#ffcfc2";
document.getElementById('title1').style.color = "#421e15";
document.getElementById('title1').style.fontSize = "50px";
document.getElementById('title1').style.border = "solid";


function clicked() {

document.getElementById('box1').style.width = "200px";
document.getElementById('box1').style.backgroundColor = "#ffcfc2";
document.getElementById('box1').style.color = "#421e15"; 
document.getElementById('box1').style.border = "dotted";
document.getElementById('box1').style.fontSize = "20px";

document.getElementById('box2').style.width = "200px";
document.getElementById('box2').style.backgroundColor = "#ffcfc2";
document.getElementById('box2').style.color = "#421e15";
document.getElementById('box2').style.border = "dotted";
document.getElementById('box2').style.fontSize = "20px";

}


function clickFunction() {
    var c = confirm("Press here to results");
    document.getElementById("result").innerHTML = c;
    }

