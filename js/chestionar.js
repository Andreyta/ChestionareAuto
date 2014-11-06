$(document).ready(function () {

    var data = window.data;
    var info = function (initialQuestion) {
        document.getElementById("count").innerHTML="Intrebara curenta: "+initialQuestion.id;
        document.getElementById("question").innerHTML = initialQuestion.intrebare;
        document.getElementById("icon").innerHTML = '<img style="height:250px;" src="' + initialQuestion.imagine + '">';
        document.getElementById("rasp1").innerHTML = initialQuestion.r1.afisare;
        document.getElementById("rasp2").innerHTML = initialQuestion.r2.afisare;
        document.getElementById("rasp3").innerHTML = initialQuestion.r3.afisare;
    };
    var alege = function (varianta) {
        var rasp = "#rasp" + varianta;
        $(rasp).addClass('highlighted');
    };
    var verificare = function (varianta, question) {
        var rasp = "#rasp" + varianta;
        var raspData = 'r' + varianta;
        if ($(rasp).hasClass("highlighted"))
            if ((question[raspData].corect) === "da") {
                $(rasp).addClass("corect");
                return true;
            }
            else {
                return false;
            }                               //are clasa si corect="nu"
        else if ((question[raspData].corect === "da")) {
            $(rasp).addClass("corect");
            return false;
        }
        else {
            return true;
        }                                       //daca nu are clasa si corect="nu"
    };
    //delete class
    var remove=function(){
        $(".list").removeClass('highlighted corect');
    };

    var currentQuestion= data.pop();
    info(currentQuestion);

    $("#a").click(function () {
        alege(1);
    });
    $("#b").click(function () {
        alege(2);
    });
    $("#c").click(function () {
        alege(3);
    });

    $("#send").click(function () {
        var r1 = verificare(1, currentQuestion);
        var r2 = verificare(2, currentQuestion);
        var r3 = verificare(3, currentQuestion);
        if (r1 && r2 && r3) {
            alert("CORECT");
            currentQuestion=data.pop();
            if(currentQuestion!=null){
                info(currentQuestion);
            }
            else alert("END!");
        }
        else {
            alert("Raspuns gresit!!!");
        }
        remove();
    });

    $("#delete").click(remove);

    $("#later").click(function () {
        remove();
        currentQuestion=data.pop();
        info(currentQuestion);
        //alert('later');
    });

});