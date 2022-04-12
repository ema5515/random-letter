var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var colors = ["#99c24d", "#f18f01", "#9368b7", "#208AAe"]
var stop = 0;
var i = 0;


function start(){
    $(".start-button").addClass("display-no");
    changeColor();
    stop = 1;
    animation();

    setTimeout(function(){
        $(document).click(function(){
            stop = 0;
            $(document).unbind();
            $(".start-button").removeClass("display-no");
         });
    }, 100);
    
}
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

function changeColor(){
    var x = Math.floor(Math.random() * 4);
    $("body").css("background-color", colors[x]);
    var y = Math.floor(Math.random() * 4);
    if(x===y){
        changeColor();
    } else{
        $(".start-button").css("background-color", colors[y]);
    }
}