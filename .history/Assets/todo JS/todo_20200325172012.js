// check off to do list items
$("li").dblclick(function(){
   $(this).css("color", "green");
//     function concepts works. find how to chnage using doubleclick.
$("li").click(function(){
    $(this).css("color", "gray");
}
)
});