let userAgentString =  navigator.userAgent;
let isopera = userAgentString.indexOf("OP") > -1

window.onload = function() {
    let btn = document.getElementById("btn")
    if (isopera == true) {
        btn.innerHTML = "Jogar!"
        btn.href = "https://gx.games/pt-br/games/jjfgei/discorun/tracks/53b793a5-8874-49aa-94ea-b5d99f2dedee/"
    }
    else {
        btn.innerHTML = 'Download Opera GX'
        btn.href = "https://www.opera.com/pt-br/gx"
        
    }

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

