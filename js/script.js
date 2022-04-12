var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var stop = 0;
var i = 0;

$(".start").click(function(){
    $("body").addClass("stop");
    $("body").removeClass("start");
        stop = 1;
        animation();

});

$(".stop").click(function(){
    stop = 0;
    $("body").addClass("start");
    $("body").removeClass("stop");
    
        stop = 0;
});


function animation(){
    
    $(".letter").text(letters[i]);
    if(i===letters.length){
        i=0;
    }else{
        i++;
    };
    console.log(i);
    setTimeout(function(){
        if(stop === 1){
            animation();
        } else {
            return;
        }
    }, 50);
}