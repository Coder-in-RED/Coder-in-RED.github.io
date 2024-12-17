var C1 = document.getElementById("case1");
var C2 = document.getElementById("case2");
var C3 = document.getElementById("case3");
var C4 = document.getElementById("case4");
var C5 = document.getElementById("case5");
var C6 = document.getElementById("case6");

var WhoIsActive;
var ArrayC = [C1, C2, C3, C4, C5, C6];
var MemorizeThatOne;
var IsOn = true;

for (let i = 0; i <= 5; i++) {
ArrayC[i].addEventListener("click", e => {
WhoIsActive = ArrayC[i];
IsOn = !WhoIsActive.nextElementSibling.classList.contains("ExtenteList");
IsOn ? TurnActive(WhoIsActive, MemorizeThatOne) : TurnInactive(WhoIsActive);
});
}

function TurnActive(TheInput, DeletePreviousOne){
var ThatOne = TheInput.nextElementSibling;
DeletePreviousOne ? DeletePreviousOne.classList.remove("ExtenteList") : "";
if(!ThatOne.classList.contains("ContractList")){
ThatOne.classList.add("ExtenteList");
return MemorizeThatOne = ThatOne;
}
else{
ThatOne.classList.replace("ContractList", "ExtenteList");
return MemorizeThatOne = ThatOne;
}
}

function TurnInactive(TheInput){
var ThatOne = TheInput.nextElementSibling;
if(ThatOne.classList.contains("ExtenteList")){
ThatOne.classList.replace("ExtenteList", "ContractList");
}
}