// GLOBAL ELETE
var main = document.getElementById("main");
// var mrgl = https://steamuserimages-a.akamaihd.net/ugc/876377577844284839/0BCFF5D6F17D43FA58180B0676C4D46B6115FDA8/;
var deck = document.getElementById('deck');
var heroes = ["Druid","Hunter","Mage","Paladin","Priest","Rogue","Shaman","Warlock","Warrior"];
// var confirm = document.getElementById('confirm');
// var deckname = document.getElementById('form').value;
var current;
console.log("хуй");
// GLOBAL ELETE
var modal = document.querySelector('.modal');
var overflow = document.createElement('div');
function openWin() {
        overflow.className = "overflow";
        document.body.appendChild(overflow);
        var height = modal.offsetHeight;
        modal.style.marginTop = - height / 2 + "px";
        modal.style.top = "50%";
}

if (!Element.prototype.remove) {
        Element.prototype.remove = function remove() {
                if (this.parentNode) {
                        this.parentNode.removeChild(this);
                }
        };
}

overflow.onclick = function () {
        modal.style.top = "-100%";
        overflow.remove();
}
 
 
// FUNCTIONS



function fetchImage(src) {
    var newimg = document.createElement('img');
 
    newimg.style.width = "200px";
    newimg.style.height = "300px";
    newimg.setAttribute('src', src)
    $("img").on("error", function() {
        $(this).unbind("error").attr("style", "display:none");
        // HANDLE
    });
    newimg.setAttribute('draggable', true);
    newimg.addEventListener("dragstart", function(event) {
        current = this;
    });
 
    main.appendChild(newimg);
}
 
function dataLoaded(data) {
 
    var json = JSON.parse(data);
    console.log(json);
    for (var i = 100; i < 175; i++) {
        var img = json[i].imgGold;
 
        fetchImage(img);
 
    }
    deck.addEventListener('dragover', function(event) {
        event.preventDefault();
    });
 
    deck.addEventListener('drop', function(event) {
        this.appendChild(current);
    });
}


 
function clean() {
    main.innerHTML = "";
}

function clean1() {
    deck.innerHTML = "";
}


// FUNCTIONS
 






//AJAX
function byType() {
 
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/Spell", {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded
    });
}
 
 
function legendary() {
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/Legendary", {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}
 
function testLoadData() {
    var name = heroes[0];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}
function testLoadData1() {
    var name = heroes[1];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}
function testLoadData2() {
    var name = heroes[2];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}
function testLoadData3() {
    var name = heroes[3];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}
function testLoadData4() {
    var name = heroes[4];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}
function testLoadData5() {
    var name = heroes[5];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}
function testLoadData6() {
    var name = heroes[6];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}
function testLoadData7() {
    var name = heroes[7];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}
function testLoadData8() {
    var name = heroes[8];
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/"+ name , {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}

function classic() {
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic", {
        type: 'GET',
        dataType: 'text',
        headers: {
            'X-RapidAPI-Key': '0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
        },
        success: dataLoaded,
    });
}

timeend= new Date();
timeend= new Date(2019,3,6,12,30);

function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
    document.getElementById('time').innerHTML=timestr;
    window.setTimeout("time()",1000);
}