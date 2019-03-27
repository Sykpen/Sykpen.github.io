// GLOBAL ELETE

var main = document.getElementById("main")
var deck = document.getElementById('deck');
var current;

// GLOBAL ELETE



// FUNCTIONS

    function dataLoaded(data) {
        
        var json = JSON.parse(data);
        console.log(json);
        for(var i = 100;i < 200; i++){
        var img = json[i].imgGold;
        var newimg = document.createElement('img');
        newimg.style.width = "200px";
        newimg.style.height = "300px";
        newimg.setAttribute('draggable', true);
        newimg.addEventListener("dragstart", function(event){
            current = this;
        });
        main.appendChild(newimg);
        newimg.setAttribute('src',img);
        } 
    deck.addEventListener('dragover', function(event){
    event.preventDefault();
    });

    deck.addEventListener('drop', function(event){
    this.appendChild(current);
    });  
}

    function clean(){
        main.innerHTML = "";
}

// FUNCTIONS


//AJAX
    function byType(){

    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/Spell",
            { type:'GET', dataType:'text',headers: {
        'X-RapidAPI-Key':'0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
    }, success:dataLoaded, }
        );
    }


  function legendary(){
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/Legendary",
            { type:'GET', dataType:'text',headers: {
        'X-RapidAPI-Key':'0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
    }, success:dataLoaded, }
        );
  }

function testLoadData() {
    var vod = document.getElementById("cardName").value;
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Hunter",
            { type:'GET', dataType:'text',headers: {
        'X-RapidAPI-Key':'0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
    }, success:dataLoaded, }
        );
}

function classic() {
    $.ajax("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic",
            { type:'GET', dataType:'text',headers: {
        'X-RapidAPI-Key':'0ebc483825msh46c421668a426e7p1f32e1jsn46ab9cf6f0ce'
    }, success:dataLoaded, }
        );
}

//AJAX























