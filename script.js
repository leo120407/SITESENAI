function verifynickmain() {
    if (!!localStorage.getItem("nick")) {
        window.location.replace("principal.html")
    }
}
function writetitle() {
    if (!!localStorage.getItem("nick")) {
        let nickls = localStorage.getItem("nick")
        let title = document.getElementsByClassName("title")[0]
        title.innerHTML += `${nickls}!`
    }
    else {
        window.alert("Defina seu nick")
        window.location.replace("index.html")
    }
    
}

function changenick() {
    localStorage.removeItem("nick")
    window.location.replace("index.html")
}

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

