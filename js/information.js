document.getElementById("recharge").onclick=function () {
    var money=prompt("请输入充值金额：");
    if ((money===undefined)||(isNaN(parseFloat(money))))alert("充值失败！");
    else alert("充值成功！");
};