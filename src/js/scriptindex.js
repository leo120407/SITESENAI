window.onload = function () {
    autoredirect()
}
function autoredirect() {
    if (!!localStorage.getItem("nick")) {
        window.location.replace("principal.html")
    }
}
var nickf = document.getElementById("inputnick")

nickf.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      inick()
    }
  });

function inick() {
    let nick = document.getElementById("inputnick").value
    if (nick == "") {
        window.alert("Insira um nick válido")
    }
    else {
        if (!!localStorage.getItem("nick")) {
            let nickls = localStorage.getItem("nick")
            window.location.replace("principal.html")
        }
        else {
            localStorage.setItem("nick", nick)
        }
    }

    

}

