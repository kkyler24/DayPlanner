// check off to do list items and change colors for different stages
$("li").dblclick(function(){
   $(this).css({
       color:"green",
       fontWeight: "bold"
    });
// in progress<--
});

$("li").click(function(){
    $(this).css({
        color: "gray",
     textDecoration: "line-through",
    });
})