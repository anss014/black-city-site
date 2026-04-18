function saylem() {
    var n = document.getElementById('u_nick').value;
    var m = document.getElementById('u_mail').value;
    var p = document.getElementById('u_pass').value;

    if (n == "" || m == "" || p == "") {
        alert("Барлық жолақты толтыр, бауырым!");
    } else {
        alert("Құттықтаймыз, " + n + "! Сен тіркелдің.");
        window.location.href = "menu.html";
    }
}