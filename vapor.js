var vaporwindow = `new Nightmare({
"title": "Vapor",
"type": "js",
"js": "https://cdn.jsdelivr.net/gh/FogNetwork/Vapor/app.min.js",
"width": 800,
"height": 600,
"theme": "dark"
})`

async function injectnightmare() {
var NightmareWindows = await fetch("https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.min.js")
var NightmareCode = await NightmareWindows.text()
NightmareCode = NightmareCode.replaceAll("<br>", ";")
var cdn1 = document.createElement("script")
cdn1.innerHTML = NightmareCode  + "\n\n" + "eval(" + vaporwindow + ")"
document.getElementsByTagName("html")[0].appendChild(cdn1)
}

var cdn2 = document.createElement("link")
cdn2.setAttribute("rel", "stylesheet")
cdn2.href = "https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.css"
document.getElementsByTagName("html")[0].appendChild(cdn2)

var ncdn3 = document.createElement("script")
ncdn3.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
document.getElementsByTagName("html")[0].appendChild(ncdn3)

var ncdn4 = document.createElement("script")
ncdn4.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"
document.getElementsByTagName("html")[0].appendChild(ncdn4)

var ncdn5 = document.createElement("link")
ncdn5.rel = "stylesheet"
ncdn5.href = "https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"
document.getElementsByTagName("html")[0].appendChild(ncdn5)


injectnightmare()