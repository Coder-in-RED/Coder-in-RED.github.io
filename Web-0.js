var B1 = document.getElementById("menu");
var DIV = document.getElementById("NavBar");
var Navi = document.getElementById("navi");

var B1Status = false;

function ItsTrue(){
if(DIV.classList.contains('NavAndLogoUnpressed')){
DIV.classList.replace('NavAndLogoUnpressed', 'NavAndLogoPressed');
Navi.classList.replace('navi', 'NaviThere');
}
else{
DIV.classList.add('NavAndLogoPressed');
Navi.classList.replace('navi', 'NaviThere');
}
}

function ItsFalse(){
DIV.classList.replace('NavAndLogoPressed', 'NavAndLogoUnpressed');
Navi.classList.replace('NaviThere', 'navi');
}

B1.addEventListener("click", e => {
B1Status = !B1Status;
B1Status ? ItsTrue() : ItsFalse();
});
