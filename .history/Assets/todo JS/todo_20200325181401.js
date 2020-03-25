// check off to do list items and change colors for different stages// in progress<--
$("li").dblclick(function () {
    $(this).css({
        color: "green",
        fontWeight: "bold"
        // gives strikethrough on double click How do we remove that?
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
    });

});

$("li").click(function () {
    // if Li is grey how do we change it back to black?
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
    }
    else{
        $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
}
})