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
   console.log(note);
   console.log(time);
}
)