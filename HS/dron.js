// GLOBAL ELETE
var main = document.getElementById("main");
var deck = document.getElementById('deck');
var modal = document.querySelector("#modal");
var sighin = document.getElementById("sighin");
var modalstart = document.getElementById("modalstart");
var modalregestr = document.getElementById("modalregestr");
var register = document.getElementById("register");
var confirm = document.getElementById("confirm");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var closeButtonstart = document.querySelector("#close-buttonstart");
var closeButtonregister = document.getElementById("closeButtonregister");
var openButton = document.getElementById('save');
var fordecks = document.getElementById('page3content');
var logout = document.getElementById("logout");
var hellodiv = document.getElementById("hello");
var modalforDeck = document.getElementById("modalforDeck");
var heroes = ["Druid","Hunter","Mage","Paladin","Priest","Rogue","Shaman","Warlock","Warrior"];
var current;
var deckName = document.getElementById("deckname").value;
var deckInfo = document.getElementById("deckInfo");
var timeend= new Date();
timeend= new Date(2019,3,9,12,30);
// GLOBAL ELETE



// FUNCTIONS
function hello(){
    var userName = document.getElementById('emailField').value;
    var hellouser = "Добрый день " + userName + ",давайте соберем вам колоду!";
    hellodiv.innerHTML = hellouser;
    console.log(hellouser);
}

function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
    document.getElementById('time').innerHTML=timestr;
    window.setTimeout("time()",1000);
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    modalregestr.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

function createuser(){
    var formemail = document.getElementById('formemail').value;
    var formpassword = document.getElementById("formpassword").value;
    firebase.auth().createUserWithEmailAndPassword(formemail, formpassword).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error :" + errorMessage);
});
}

function login(){

    var useremail = document.getElementById('emailField').value;
    var userpass = document.getElementById('passwordField').value;

    firebase.auth().signInWithEmailAndPassword(useremail, userpass).then(function(){
            modalstart.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");
            modalregestr.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");
            console.log(useremail +", успешно зашел на сайт");
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error :" + errorMessage);
});

function showRegester(){
    modalstart.classList.toggle("closed");
    modalregestr.classList.toggle("closed");
}
}


function closeDeckName(){
    modalforDeck.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
}

function check(){
    var deckName = document.getElementById("deckname").value;
   // var el = deck.getElementsByTagName('img');
   // var deckarr = Array.from(el);
   // console.log(deckarr);
   // var deckJSon = JSON.stringify(deckarr);
   // console.log(deckJSon);
     localStorage.setItem(deckName,deckName);
   // var qqq = JSON.parse(deckJSon);
   // console.log(qqq);
    
    closeDeckName();
};
function aboutDeck(){

    var userName = document.getElementById('emailField').value;
    var deckName = localStorage.getItem(deckName);

    if(deckName === null){
        var errormessage = "У данного пользователя отсутсвуют колоды.";
        deckInfo.innerHTML = errormessage;
    } else {
        var aboutDeckinfo = "У пользователя " + userName + ",есть колода под именем :" + deckName;
        deckInfo.innerHTML = aboutDeckinfo; 
    };
 
    console.log(aboutDeckinfo);
}

function showdeck(){
    aboutDeck();
    // var deckName = document.getElementById("deckname").value;
    // var dataDeck = {};
    // dataDeck = JSON.parse(localStorage.getItem(deckName));

    // // fordecks.appendChild(dataDeck);
};


// function fetchImage(src) {
//     var q = 0;
//     var newimg = document.querySelectorAll("img")[q];
//     console.log(newimg);
//     q++;
//     console.log(q);
//     newimg.setAttribute('src', src)
//     $("img").on("error", function() {
//         $(this).unbind("error").attr("style", "display:none");
//     });
//     newimg.setAttribute('draggable', true);
//     newimg.addEventListener("dragstart", function(event) {
//         current = this;
//     });
//     // event.dataTransfer.setDragImage(this, 100, 150);
//     main.appendChild(newimg);
    
// };

function dataLoaded(data) {
    var json = JSON.parse(data);
    var q = 0;
    console.log(json);
    for (var i = 100; i < 145; i++) {
        var img = json[i].imgGold;
        // fetchImage(img);
    
    var newimg = document.querySelectorAll("img.karta")[q];
    // newimg.setAttribute('src', src)
    newimg.setAttribute('src', img)
    $("img").on("error", function() {
        $(this).unbind("error").attr("style", "display:none");
    });

    newimg.setAttribute('draggable', true);
    newimg.addEventListener("dragstart", function(event) {
        current = this;
    });
    newimg.classList.toggle("kartaback");
    // event.dataTransfer.setDragImage(this, 100, 150);
    q = q + 1;
    }
    newimg.classList.toggle("kartaback");
    deck.addEventListener('dragover', function(event) {
        event.preventDefault();
    });
 
    deck.addEventListener('drop', function(event) {
        this.appendChild(current);
    });
};

function clean() {
    main.innerHTML = "";
};

function clean1() {
    deck.innerHTML = "";
};


logout.addEventListener("click",function(){
    firebase.auth().signOut().then(function() {
    console.log("Вы успешно вышли из аккаунта");
}).catch(function(error) {
  console.log("Упс, что то пошло не так. Перезапустите страницу.");
});
    
});

register.addEventListener("click", function(){
    modalregestr.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

closeButtonregister.addEventListener("click", function(){
    modalregestr.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

sighin.addEventListener("click", function(){
    modalstart.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

closeButtonstart.addEventListener("click", function(){
    modalstart.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

closeButton.addEventListener("click", function(){
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function() {
      modal.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
    });
// FUNCTIONS
 


//AJAX

function testLoadData1() {
    // clean();

    var name = heroes[1];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
};




