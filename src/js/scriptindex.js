function autoredirect() {
    if (!!localStorage.getItem("nick")) {
        window.location.replace("principal.html")
    }
}

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

