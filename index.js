var counter = 0;
var i = 0;
var r = 0;
var d = 0;

$("button").click(function(e){

    if($(this).attr("class") == "increase"){
        console.log("here")
        counter++;
        i++;
        r=0;
        d=0;

    }else if($(this).attr("class") == "reset"){
        counter=0;
        r++;
        i=0;
        d=0;

    }else if($(this).attr("class") == "decrease"){
        counter--;
        d++;
        i=0;
        r=0;

    }



    if(counter >0){
        $(".label").css("color", "green")
    }else if(counter < 0){
        $(".label").css("color", "red")
    }else{
        $(".label").css("color", "black")
    }

    $(".label").text(counter);

    if(i >= 5){
        $(".msg").text("going to sky aye")
    }else if(r >=5){
        $(".msg").text("stop mate you're gonna break the button")
    }else if(d >= 5){
        $(".msg").text("dont go to down mate no good")
    }else{
        $(".msg").text("")
    }
});


        