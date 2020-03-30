// check off to do list items and change colors for different stages// in progress<--
$("li").dblclick(function () {
        if($(this).css("color") === "rgb(11, 209, 170)"){
            $(this).css({
                color: "gray",
                textDecoration: "line-through"
            });
        }
        else{
            $(this).css({
            color: "rgb(11, 209, 170)",
            textDecoration: "none",
            fontWeight: "bold"
        });
    }
});

$("li").click(function () {
    // if Li is grey how do we change it back to black?
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else{
        $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
}
});

// --->planner<--

var date = document.getElementById("date");
var dateOfMonth = moment().date(String).local().format("dddd, MMMM Do YYYY");
var presentTime; 
date.append(dateOfMonth);
var dataInput;
var key = new Object();
var newElement;
function timeSubmit(evt){
    evt.preventDefault();
    dataInput = evt.target.children[1].value;
    key[evt.target.children[0].innerText] = dataInput;
    localStorage.setItem(evt.target.innerText, dataInput);
    console.log(key);
}
var left = document.getElementsByClassName("left");
left.forEach(function(element){
    var time = element.innerHTML.slice(0,1);
    console.log(time);s
})
var text;
var textArr = [];
for (var i = 0; i < left.length; i++){
    text = left[i].innerHTML;
    if (text.length === 4){
        text = text.slice(0,1);
    } else if
    (text.length === 5){
        text = text.slice(0,2);
    }
    textArr.push(text);
}
presentTime = moment().format('hmm');
textArr.forEach(function(element){
    newElement = element.concat("00");
    console.log(newElement);
})


textArr.forEach(function(time){
    if(presentTime > time){

    }
})

