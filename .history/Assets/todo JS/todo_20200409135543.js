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



// Planner-->

$(".btn-save").on("click", function(){
   var time = $(this).attr("data-time");
   var note = $('input[data-input='+time+']').val()
//    we are selecting a input with a specific attr of time, and retrieving the value of the input. 
localStorage.setItem("note-input" + time, note);
// this sets the Item from input into local storage. 
console.log(note);
   console.log(time);
}
)

let currentDay = moment().format("MM-DD-YYYY");
console.log(currentDay);
$("#currentDay").html(currentDay);
let militaryTime = moment().format("HH");
console.log(militaryTime);

$("input[data-input]").each(function (){
    var time = $(this).attr('data-input')
   var note = localStorage.getItem("note-input" + time);
    $('input[data-input='+time+']').val(note);
    // take the note and updates the input, comparision is going inside this loop
});
