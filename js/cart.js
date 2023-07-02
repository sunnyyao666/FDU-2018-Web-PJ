var f = true;

for (var i = 0; i < document.getElementsByClassName("delete").length; i++)
    document.getElementsByClassName("delete")[i].onclick = function () {
        if (f) alert("删除成功！");
        else alert("删除失败！");
    };

var f4 = true;

document.getElementById("check").onclick = function () {
    if (f4) alert("结账成功！");
    else alert("余额不足，结账失败！");
};