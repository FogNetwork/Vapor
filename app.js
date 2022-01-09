var title = document.createElement("div")
title.className = "avotitle"
title.innerText = "Vapor"
appid.appendChild(title)

var items = document.createElement("center")

var tab = document.createElement("button")
tab.className = "avotab"
tab.innerText = "Tab Cloak"
items.appendChild(tab)

var inspect = document.createElement("button")
inspect.className = "avotab"
inspect.innerText = "Avo"
inspect.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Avo/avo.min.js';document.body.appendChild(a);}())
")
items.appendChild(inspect)

appid.appendChild(items)

var avostyle = document.createElement("style")
avostyle.innerText = ".avotitle {font-size: 60px; text-align: center; color: white; user-select: none;}.avotab{cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white; border: none; font-size: 18px;user-select: none; margin: 5px;}"
document.getElementsByTagName("html")[0].appendChild(avostyle)