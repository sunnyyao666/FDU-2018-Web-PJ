var register = {
        id: document.getElementById("id2"),
        password: document.getElementById("password2"),
        repassword: document.getElementById("repassword"),
        email: document.getElementById("email"),
        phone: document.getElementById("phone")
    };

    var f2 = 0;

    register.id.onblur = function () {
        if (register.id.value !== "") {
            document.getElementById("id2Null").style.display = "none";
            document.getElementById("id2").style.border = "1px solid #ccc";
            document.getElementById("id2Checked").style.display = "none";
            if ((!/^[0-9]+$/.test(register.id.value)) && (!/^[A-Za-z]+$/.test(register.id.value)) && (/^[A-Za-z0-9_]{6,}$/.test(register.id.value))) {
                document.getElementById("id2Wrong").style.display = "none";
                document.getElementById("id2").style.border = "1px solid #ccc";
                document.getElementById("id2Checked").style.display = "inline-block";
            } else {
                document.getElementById("id2Wrong").style.display = "inline-block";
                document.getElementById("id2").style.border = "1px solid red";
                document.getElementById("id2Checked").style.display = "none";
            }
        } else {
            document.getElementById("id2Wrong").style.display = "none";
            document.getElementById("id2Null").style.display = "inline-block";
            document.getElementById("id2").style.border = "1px solid red";
            document.getElementById("id2Checked").style.display = "none";
        }
    };

    register.password.onblur = function () {
        if (register.password.value !== "") {
            document.getElementById("password2Null").style.display = "none";
            document.getElementById("password2").style.border = "1px solid #ccc";
            document.getElementById("password2Checked").style.display = "none";
            if ((register.password.value !== register.id.value) && (/^[A-Za-z0-9_]{6,}$/.test(register.password.value))) {
                document.getElementById("password2Wrong").style.display = "none";
                document.getElementById("password2").style.border = "1px solid #ccc";
                document.getElementById("password2Checked").style.display = "inline-block";
            } else {
                document.getElementById("password2Wrong").style.display = "inline-block";
                document.getElementById("password2").style.border = "1px solid red";
                document.getElementById("password2Checked").style.display = "none";
            }
        } else {
            document.getElementById("password2Null").style.display = "inline-block";
            document.getElementById("password2").style.border = "1px solid red";
            document.getElementById("password2Wrong").style.display = "none";
            document.getElementById("password2Checked").style.display = "none";
        }
    };

    register.repassword.onblur = function () {
        if (register.repassword.value !== "") {
            document.getElementById("repasswordNull").style.display = "none";
            document.getElementById("repassword").style.border = "1px solid #ccc";
            document.getElementById("repasswordChecked").style.display = "none";
            if (register.repassword.value === register.password.value) {
                document.getElementById("repasswordWrong").style.display = "none";
                document.getElementById("repassword").style.border = "1px solid #ccc";
                document.getElementById("repasswordChecked").style.display = "inline-block";
            } else {
                document.getElementById("repasswordWrong").style.display = "inline-block";
                document.getElementById("repassword").style.border = "1px solid red";
                document.getElementById("repasswordChecked").style.display = "none";
            }
        } else {
            document.getElementById("repasswordNull").style.display = "inline-block";
            document.getElementById("repassword").style.border = "1px solid red";
            document.getElementById("repasswordWrong").style.display = "none";
            document.getElementById("repasswordChecked").style.display = "none";
        }
    };

    register.email.onblur = function () {
        if (register.email.value !== "") {
            document.getElementById("emailNull").style.display = "none";
            document.getElementById("email").style.border = "1px solid #ccc";
            document.getElementById("emailChecked").style.display = "none";
            if (/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/.test(register.email.value)) {
                document.getElementById("emailWrong").style.display = "none";
                document.getElementById("email").style.border = "1px solid #ccc";
                document.getElementById("emailChecked").style.display = "inline-block";
            } else {
                document.getElementById("emailWrong").style.display = "inline-block";
                document.getElementById("email").style.border = "1px solid red";
                document.getElementById("emailChecked").style.display = "none";
            }
        } else {
            document.getElementById("emailWrong").style.display = "none";
            document.getElementById("emailNull").style.display = "inline-block";
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("emailChecked").style.display = "none";
        }
    };

    register.phone.onblur = function () {
        if (register.phone.value !== "") {
            document.getElementById("phoneNull").style.display = "none";
            document.getElementById("phone").style.border = "1px solid #ccc";
            document.getElementById("phoneChecked").style.display = "none";
            if (/^[1][34578][0-9]{9}$/.test(register.phone.value)) {
                document.getElementById("phoneWrong").style.display = "none";
                document.getElementById("phone").style.border = "1px solid #ccc";
                document.getElementById("phoneChecked").style.display = "inline-block";
            } else {
                document.getElementById("phoneWrong").style.display = "inline-block";
                document.getElementById("phone").style.border = "1px solid red";
                document.getElementById("phoneChecked").style.display = "none";
            }
        } else {
            document.getElementById("phoneWrong").style.display = "none";
            document.getElementById("phoneNull").style.display = "inline-block";
            document.getElementById("phone").style.border = "1px solid red";
            document.getElementById("phoneChecked").style.display = "none";
        }
    };

    document.getElementById("registerButton").onclick = function () {
        if (!f2) {
            document.getElementById("btn2").click();
            alert("注册成功！");
        } else if (f2 === 5) alert("用户已存在，注册失败！");
        else alert("服务器错误，注册失败！");
    };

    var signin = {
        id: document.getElementById("id1"),
        password: document.getElementById("password1")
    };

    var f1 = true, f3 = true;
    document.getElementById("signinButton").onclick = function () {
        if (signin.id.value === "") {
            alert("请输入用户名！");
            signin.id.focus();
        } else if (signin.password.value === "") {
            alert("请输入密码！");
            signin.password.focus();
        } else if (!f1) {
            alert("用户不存在！");
            signin.id.focus();
        } else if (!f3) {
            alert("密码错误！");
            signin.password.focus();
        } else {
            alert("登陆成功！");
            document.getElementById("btn1").click();
        }
    };

    function change1() {
        for (var i = 0; i < document.getElementsByClassName("after-sign").length; i++) document.getElementsByClassName("after-sign")[i].style.display = "inline-block";
        for (i = 0; i < document.getElementsByClassName("before-sign").length; i++) document.getElementsByClassName("before-sign")[i].style.display = "none";
    }

    function change2() {
        for (var i = 0; i < document.getElementsByClassName("after-sign").length; i++) document.getElementsByClassName("after-sign")[i].style.display = "none";
        for (i = 0; i < document.getElementsByClassName("before-sign").length; i++) document.getElementsByClassName("before-sign")[i].style.display = "inline-block";
    }
