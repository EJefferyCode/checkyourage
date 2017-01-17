function changeBackground() {
var text = document.getElementById("ha").style.backgroundColor = "#01cd56";
var text = document.getElementById("hb").style.backgroundColor = "#01cd56";    
var text = document.getElementById("hc").style.backgroundColor = "#01cd56";    
var text = document.getElementById("hd").style.backgroundColor = "#f01e72";
var text = document.getElementById("he").style.backgroundColor = "#f01e72";
var text = document.getElementById("hf").style.backgroundColor = "#f01e72";
}

function backToNormal() {
var text = document.getElementById("ha").style.backgroundColor = "";
var text = document.getElementById("hb").style.backgroundColor = "";    
var text = document.getElementById("hc").style.backgroundColor = "";    
var text = document.getElementById("hd").style.backgroundColor = "";
var text = document.getElementById("he").style.backgroundColor = "";
var text = document.getElementById("hf").style.backgroundColor = "";    
}

//Mathematical Functions Below 

function add_number() {

    var a = parseInt(document.getElementById("text1").value);
    var b = parseInt(document.getElementById("text2").value);
    var r = a + b;
    
    document.getElementById("resul").value = ('You are currently ' +a+ ' years old. In ' +b+ ' years, you will be ' +r+ ' years old. ');
    

}

function sub_number() {

    var c = parseInt(document.getElementById("text3").value);
    var d = parseInt(document.getElementById("text4").value);
    var rr = c - d;
    
    document.getElementById("resul2").value = ('You were born in ' +d+ '. In ' +c+ ' you will be ' +rr+ ' years old. ');



}







