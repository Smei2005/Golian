document.getElementById("button_sleep").onclick = function() {
    fetch("http://192.168.0.104:8000/suspend").then()
}

document.getElementById("button_restart").onclick = function() {
    fetch("http://192.168.0.104:8000/restart").then()
}

document.getElementById("button_off").onclick = function() {
    fetch("http://192.168.0.104:8000/turnOFF").then()
}