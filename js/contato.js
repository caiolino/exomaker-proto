function validateForm() {
    let email = document.getElementById("form-email").value;
    let name = document.getElementById("form-name").value;
    let tamanho = email.length;
    let nomeTamanho = name.length;
    let valida = Boolean;
    valida = true;

    if (tamanho < 1) {
        document.getElementById("alert-email").innerHTML = "Campo vazio";
        document.getElementById("alert-email").style.visibility = "visible";
    } else if (!email.includes("@")) {
        document.getElementById("alert-email").innerHTML = "Campo não contem @ ";
        document.getElementById("alert-email").style.visibility = "visible";

    } else if (!email.endsWith(".com") && !email.endsWith(".br") && !email.endsWith(".net")) {
        document.getElementById("alert-email").innerHTML = "Campo não contem .com .br .net";
        document.getElementById("alert-email").style.visibility = "visible";
    } else {
        document.getElementById("alert-email").style.visibility = "hidden";

    }

    if (nomeTamanho < 1) {
        document.getElementById("alert-nome").innerHTML = "Insira um Nome";
        document.getElementById("alert-nome").style.visibility = "visible";
    } else {
        document.getElementById("alert-nome").style.visibility = "hidden";
    }

}