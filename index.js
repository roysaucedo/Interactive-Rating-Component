let selection1 = document.getElementById('selectedOption1');
let selection2 = document.getElementById('selectedOption2');
let selection3 = document.getElementById('selectedOption3');
let selection4 = document.getElementById('selectedOption4');
let selection5 = document.getElementById('selectedOption5');

let value1 = document.getElementById('selectedValue1');
console.log(value1)

selection1.addEventListener("click", ratingSelect1);

function ratingSelect1(){
    selection1.style.backgroundColor = "#FC7612";
    selection1.style.color = "#FFFFFF";

    selection2.style.backgroundColor = "#262E38";
    selection2.style.color = "hsl(217, 12%, 63%)";
    
    selection3.style.backgroundColor = "#262E38";
    selection3.style.color = "hsl(217, 12%, 63%)";

    selection4.style.backgroundColor = "#262E38";
    selection4.style.color = "hsl(217, 12%, 63%)";

    selection5.style.backgroundColor = "#262E38";
    selection5.style.color = "hsl(217, 12%, 63%)";


};

selection2.addEventListener("click", ratingSelect2);

function ratingSelect2(){
    selection2.style.backgroundColor = "#FC7612";
    selection2.style.color = "#FFFFFF";

    selection1.style.backgroundColor = "#262E38";
    selection1.style.color = "hsl(217, 12%, 63%)";
    
    selection3.style.backgroundColor = "#262E38";
    selection3.style.color = "hsl(217, 12%, 63%)";

    selection4.style.backgroundColor = "#262E38";
    selection4.style.color = "hsl(217, 12%, 63%)";

    selection5.style.backgroundColor = "#262E38";
    selection5.style.color = "hsl(217, 12%, 63%)";

};

selection3.addEventListener("click", ratingSelect3);

function ratingSelect3(){
    selection3.style.backgroundColor = "#FC7612";
    selection3.style.color = "#FFFFFF";

    selection1.style.backgroundColor = "#262E38";
    selection1.style.color = "hsl(217, 12%, 63%)";
    
    selection2.style.backgroundColor = "#262E38";
    selection2.style.color = "hsl(217, 12%, 63%)";

    selection4.style.backgroundColor = "#262E38";
    selection4.style.color = "hsl(217, 12%, 63%)";

    selection5.style.backgroundColor = "#262E38";
    selection5.style.color = "hsl(217, 12%, 63%)";

};

selection4.addEventListener("click", ratingSelect4);

function ratingSelect4(){
    selection4.style.backgroundColor = "#FC7612";
    selection4.style.color = "#FFFFFF";

    selection1.style.backgroundColor = "#262E38";
    selection1.style.color = "hsl(217, 12%, 63%)";
    
    selection2.style.backgroundColor = "#262E38";
    selection2.style.color = "hsl(217, 12%, 63%)";

    selection3.style.backgroundColor = "#262E38";
    selection3.style.color = "hsl(217, 12%, 63%)";

    selection5.style.backgroundColor = "#262E38";
    selection5.style.color = "hsl(217, 12%, 63%)";

};

selection5.addEventListener("click", ratingSelect5);

function ratingSelect5(){
    selection5.style.backgroundColor = "#FC7612";
    selection5.style.color = "#FFFFFF";

    selection1.style.backgroundColor = "#262E38";
    selection1.style.color = "hsl(217, 12%, 63%)";
    
    selection2.style.backgroundColor = "#262E38";
    selection2.style.color = "hsl(217, 12%, 63%)";

    selection3.style.backgroundColor = "#262E38";
    selection3.style.color = "hsl(217, 12%, 63%)";

    selection4.style.backgroundColor = "#262E38";
    selection4.style.color = "hsl(217, 12%, 63%)";

};


//Show Thank You
let submitBtn = document.getElementById('submit-btn');
let startCard = document.getElementById('start-card');
let thankYouCard = document.getElementById('ty-card');

submitBtn.addEventListener("click", showThankYou);

function showThankYou(){
    startCard.style.display = "none";
    thankYouCard.style.display = "flex";

}

