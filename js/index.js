document.getElementById("inside").style.width = window.screen.width*3 + "px";
document.getElementById("inside").style.left = window.screen.width / 2 + "px";
document.getElementById("inside").style.marginLeft = (-window.screen.width / 2) + "px";
for (var i = 0; i < document.getElementsByClassName("image").length; i++)
    document.getElementsByClassName("image")[i].style.width = window.screen.width + "px";

var num = 0;

var interval = setInterval(function () {
    document.getElementById("inside").style.transition = "all 1s ease";
    num++;
    switch (num) {
        case 1:
            document.getElementById("inside").style.marginLeft = (-window.screen.width/2) + "px";
            for (var i = 0; i < document.getElementsByClassName("button").length; i++)
                if (document.getElementsByClassName("button")[i].classList.contains("show"))document.getElementsByClassName("button")[i].classList.remove("show");
            document.getElementsByClassName("button")[0].classList.add("show");
            break;
        case 2:
            document.getElementById("inside").style.marginLeft = (-window.screen.width/2 - window.screen.width) + "px";
            for (var i = 0; i < document.getElementsByClassName("button").length; i++)
                if (document.getElementsByClassName("button")[i].classList.contains("show"))document.getElementsByClassName("button")[i].classList.remove("show");
            document.getElementsByClassName("button")[1].classList.add("show");
            break;
        case 3:
            document.getElementById("inside").style.marginLeft = (-window.screen.width/2 - window.screen.width * 2) + "px";
            for (var i = 0; i < document.getElementsByClassName("button").length; i++)
                if (document.getElementsByClassName("button")[i].classList.contains("show"))document.getElementsByClassName("button")[i].classList.remove("show");
            document.getElementsByClassName("button")[2].classList.add("show");
            num=0;
            break;
        default:
            break;
    }
}, 3000);

function changeBanner(num1) {
    document.getElementById("inside").style.transition = "all 1s ease";
    switch (num1) {
        case 1:
            document.getElementById("inside").style.marginLeft = (-window.screen.width/2) + "px";
            for (var i = 0; i < document.getElementsByClassName("button").length; i++)
                if (document.getElementsByClassName("button")[i].classList.contains("show"))document.getElementsByClassName("button")[i].classList.remove("show");
            document.getElementsByClassName("button")[0].classList.add("show");
            break;
        case 2:
            document.getElementById("inside").style.marginLeft = (-window.screen.width/2 - window.screen.width) + "px";
            for (var i = 0; i < document.getElementsByClassName("button").length; i++)
                if (document.getElementsByClassName("button")[i].classList.contains("show"))document.getElementsByClassName("button")[i].classList.remove("show");
            document.getElementsByClassName("button")[1].classList.add("show");
            break;
        case 3:
            document.getElementById("inside").style.marginLeft = (-window.screen.width/2 - window.screen.width * 2) + "px";
            for (var i = 0; i < document.getElementsByClassName("button").length; i++)
                if (document.getElementsByClassName("button")[i].classList.contains("show"))document.getElementsByClassName("button")[i].classList.remove("show");
            document.getElementsByClassName("button")[2].classList.add("show");
            break;
        default:
            break;
    }
    num = num1 - 1;
}