var title = document.createElement("div")
title.className = "tabtitle"
title.innerText = "Tab Cloak"
appid.appendChild(title)

var vbuttons = document.createElement("center")

var vtab = document.createElement("input")
vtab.id = "tab"
vtab.placeholder = "Enter title or icon"
vbuttons.appendChild(vtab)

var vbutton1 = document.createElement("button")
vbutton1.className = "settitle"
vbutton1.setAttribute("onclick", "settitle()")
vbutton1.innerText = "Title"
vbuttons.appendChild(vbutton1)

var vbutton2 = document.createElement("button")
vbutton2.className = "seticon"
vbutton2.setAttribute("onclick", "seticon()")
vbutton2.innerText = "Icon"
vbuttons.appendChild(vbutton2)

appid.appendChild(vbuttons)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".tabtitle {font-size: 30px; text-align: center; color: white; user-select: none; margin-top: 10px;} .seticon, .settitle {cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;} #tab {    background: #303134;border-radius: 2.5px;height: 50px;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;padding-left: 5px;outline: none;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)

var vaporscript = document.createElement("script")
vaporscript.innerHTML = `
var oldtitle = document.title
var oldfavicontype = "none"
var oldfavicon;

var favicon1 = document.querySelector("link[rel='icon']")
var favicon2 = document.querySelector("link[rel='shortcut icon']")

if (favicon1) {
oldfavicontype = "favicon1"
oldfavicon = favicon1.href
} else if (favicon2) {
oldfavicontype = "favicon2"
oldfavicon = favicon2.href
}

function settitle() {
var tab = document.getElementById("tab")
if (tab.value !== "") {
document.title = tab.value
} else {
document.title = oldtitle
}
tab.value = ""
}

function seticon() {
var tab = document.getElementById("tab")
var favicon1 = document.querySelector("link[rel='icon']")
var favicon2 = document.querySelector("link[rel='shortcut icon']")

if (tab.value !== "") {
if (favicon1) {
favicon1.href = tab.value
} else if (favicon2) {
favicon2.href = tab.value
} else {
var favicon = document.createElement("link")
favicon.rel = "icon"
favicon.href = tab.value
document.getElementsByTagName("head")[0].appendChild(favicon)
}
} else {
if (oldfavicontype == "favicon1") {
favicon1.href = oldfavicon
} else if (oldfavicontype == "favicon2") {
favicon2.href = oldfavicon
} else {
if (favicon1) {
favicon1.remove()
} else if (favicon2) {
favicon2.remove()
}
}
}
tab.value = ""
}`
document.getElementsByTagName("html")[0].appendChild(vaporscript)