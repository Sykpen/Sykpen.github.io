$(document).ready(function(){
  $('.slider').slick({
    dots:true,
    infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
  	arrows: false,
  	dots:false,
  autoplaySpeed: 2000
  });
});

// var testmenu = document.getElementById('testlink');
// var submenutest = document.getElementById('sub');
// testmenu.addEventListener("mouseenter",function(){
// 	submenutest.style.dispaly = "block";

// 	console.log(submenutest);
// });
// console.log(testmenu);

var questions = [
    {
       type: "choose",
        question: "<h3>My sister likes Mexican food, but I don’t like ____.</h3>",
        answers: [
            "Her",
            "Them",
            "It",
            "You"
        ],
        correct: [3]
    },
  {
        type: "choose",
        question: "<h3>Does _______ friend like classical music?</h3>",
        answers: [
            "You",
            "Them",
            "It",
            "Your"
        ],
        correct: [4]
    },
  {
        type: "choose",
        question: "<h3>My parents haven’t got calculators, but ______ have a computer at home.</h3>",
        answers: [
            "They",
            "Them",
            "It",
            "You"
        ],
        correct: [1]
    },
  {
    type: "choose",
        question: "<h3>John isn’t going to buy a new house _______</h3>",
        answers: [
            "Last week",
            "Next year",
            "Yesterday",
            "Tomorrow"
        ],
        correct: [4]
    },
  {
   type: "choose",
        question: "<h3>Where were you at 6 o’clock ________?</h3>",
        answers: [
            "Tomorrow",
            "At 6 a.m.",
            "In the summer",
            "This morning"
        ],
        correct: [4]
    },
  {
  type: "choose",
        question: "<h3>Which verb is the opposite of sell?</h3>",
        answers: [
            "Cost",
            "Buy",
            "Lend",
            "Pay"
        ],
        correct: [2]
    },
  {
type: "choose",
        question: "<h3>Which word means very good?</h3>",
        answers: [
            "Expensive",
            "Important",
            "Brilliant",
            "Excellent"
        ],
        correct: [4]
    },
  {
type: "choose",
        question: "<h3>Which word is not about family?</h3>",
        answers: [
            "Aunt",
            "Uncle",
            "Wide",
            "Grandfather"
        ],
        correct: [3]
    },
  {
type: "choose",
        question: "<h3>Which word is not a language?</h3>",
        answers: [
            "France",
            "Italian",
            "French",
            "Japanese"
        ],
        correct: [1]
    },
  {
type: "choose",
        question: "<h3>Where did you ___ when you were a child?</h3>",
        answers: [
            "Would live",
            "Lived",
            "Live",
            "Living"
        ],
        correct: [3]
    },
  {
type: "choose",
        question: "<h3>Are you _____ José tomorrow?</h3>",
        answers: [
            "See",
            "Them",
            "Will see",
            "Going to see"
        ],
        correct: [4]
    },
  {
type: "choose",
        question: "<h3>I went home  ______ my new baby.</h3>",
        answers: [
            "Her",
            "See",
            "For to see",
            "To see"
        ],
        correct: [4]
    }
];

$("document").ready(function(){
    $("#jQuizler").jQuizler(questions);
});



