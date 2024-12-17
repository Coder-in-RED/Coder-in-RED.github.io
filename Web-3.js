const Q = document.getElementById("question");
var ItIsFalse = document.getElementById("AnswerFalse");
var ItIsTrue = document.getElementById("AnswerTrue");
const SubmitIt = document.getElementById("submit");
var GameShell = document.getElementById("game");
var GameB = document.getElementById("QuizButtons");
const ShellOfItIs = document.getElementById("fieldset2");

var ContainsQuestion = [0,1,2,3,4,5,6,7,8,9];
var ContainsText = ["Beim Fußball spielen werden Sie gefoult und reißen sich die Kreuzbänder","Sie als Taxifahrer laden ein schweres Gepäckstück Ihres Kundes in Ihrem Taxi ein. Dabei erleiden Sie einen Bandscheibenvorfall.","Sie laden ein schweres Gepäckstück in Ihrem Fahrzeug ein und erleiden einen Bandscheibenvorfall.","Herr Mustermann entschied sich zu verletzen um mit dem Geld der Unfallversicherung seine Schulden abzuzahlen","Durch einen Zeckenbiss erkrankt Frau Mustermann an Borreliose. der Fall ist…","Durch Trunkenheit am Steuer erlitt Fr. Mustermann einen Unfall. Ihr rechter Arm kann sich nie wieder bewegen.","Herr Mustermann verwechselte die Zutaten beim Abendessen verzehrt er den mit Fliegengitterpilz versetzen Eintopf. Er erleidet eine Lebensmittelvergiftung.","Durch einen Autounfall wird Hr. Mustermann Querschnittgelähmt. Er war auf dem Weg zum Supermarkt und ist nur Gesetzlich versichert.","Fr. Mustermann eilt die Treppe runter, da sie ihren Arzttermin verpasst. Dabei rutscht sie unglücklicherweise aus. Sie wird ihr Bein nie mehr so gut bewegen können wie jetzt.","Herr Mustermann erlitt einen Autounfall und erlitt kleine Schnittwunden und ein Paar blaue flecken die nach ein Paar Tagen alle verheilten."];
var score = 0;
var start = false;
var RealNumber;
var NewButton;
var round = -1;

ShellOfItIs.classList.add("hidden");

function First(){
var RandomNumber = Math.floor(Math.random() * (ContainsQuestion.length));
Q.textContent = ContainsText[ContainsQuestion[RandomNumber]];
var SaveArray = ContainsQuestion[RandomNumber];
var deleted = ContainsQuestion.splice(RandomNumber, 1);
start ? deleted : "";
ItIsTrue.checked = false;
ItIsFalse.checked = false;
return RealNumber = SaveArray;
}

SubmitIt.addEventListener("click", e => {
if(start && ItIsTrue.checked || start && ItIsFalse.checked){
graded(RealNumber);
}
else if(!start){
graded();
start = true;
ShellOfItIs.classList.remove("hidden");
}


if(ContainsQuestion.length === 0){
SubmitIt.textContent = "Ergebniss sehen";
SubmitIt.id = "TheRatings";
var rating = document.getElementById("TheRatings");

rating.addEventListener("click", e =>{
solution();
});
} 
});

function graded(QuestionNumber){
console.log(round);
var LastScore = score;
var CheckIt = QuestionNumber % 2;
if(ItIsTrue.checked && CheckIt === 0){
score++
}
else if(ItIsFalse.checked && CheckIt === 1){
score++
}
var CheckScore = score > LastScore;
First();
console.log(start);
if(start){
CheckScore ? Positive() : Negative();
}
round++
}

function solution(){

ShellOfItIs.classList.add("hidden");

GameShell.classList.add("game");
GameShell.innerHTML = `
<h1 id="QuizHeader"> Ergebnis </h1>
<h2 id="question"> ${score}/10 Punkte hast du erzielt. Du kannst zurück zur Startseite oder es nochmal probieren </h2>`;

GameB.innerHTML = ` 
<div class="TheRating HyperButtonShell">
<a class="HyperButton" href="index.html"> Zurück zur Startseite </a>
</div>
<div class="TheRating HyperButtonShell">
<a class="HyperButton" href=""> Nochmal </a>
</div> `;
}

function Positive(){
const P = document.querySelectorAll(".default");
P.forEach((Pdiv, index) => {
P[round].classList.add("AnswerTrue");
});
}

function Negative(){
const P = document.querySelectorAll(".default");
P.forEach((Pdiv, index) => {
P[round].classList.add("AnswerFalse");
});
}
