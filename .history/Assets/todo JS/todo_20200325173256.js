// check off to do list items and change colors for different stages// in progress<--
$("li").dblclick(function(){
   $(this).css({
       color:"green",
       fontWeight: "bold"
// gives strikethrough on double click How do we remove that?
    });

});

$("li").click(function(){
    $(this).css({
        color: "gray",
     textDecoration: "line-through",
    });
})