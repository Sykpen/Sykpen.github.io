var page1content = document.getElementById("page1");
var page2content = document.getElementById("page2");
var page3content = document.getElementById("page3");
var qwer = document.getElementById("qwer");
var readydeck = document.getElementById("readydeck");
console.log('dsdsdsdsdsd');

page2content.style.display = "none";
page3content.style.display = "none";


function changepage1(){
	page3content.style.display = "none";
	page2content.style.display = "none";
	page1content.style.display = "block";
}

function changepage2(){
	page3content.style.display = "none";
	page1content.style.display = "none";
	showpage2();
}

function changepage3(){
	page1content.style.display = "none";
	page2content.style.display = "none";
	page3content.style.display = "block";
}

function showpage2(){
	page2content.style.display = "block";
}

gameinfo.addEventListener("click",changepage1);
qwer.addEventListener("click",changepage2);
readydeck.addEventListener("click",changepage3);

