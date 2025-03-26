var btn_circle= document.getElementById("btnC");
var btn_rect= document.getElementById("btnR");
var btn_tri= document.getElementById("btnT");

var circle=document.getElementByID("circle");
var rect=document.getElementByID("rect");
var tri=document.getElementByID("tri");

btn_circle.onclick=function(){
    circle.setAttribute("class", "shape_circle");
}
btn_rect.onclick=function(){
    rect.setAttribute("class", "shape_rect");
}
btn_tri.onclick=function(){
    tri.setAttribute("class", "shape_tri");
}
circle.onclick=function(){
    circle.setAttribute("class", "hide")
}
rect.onclick=function(){
    rect.setAttribute("class", "hide")
}
tri.onclick=function(){
    tri.setAttribute("class", "hide")
}