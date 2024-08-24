document.getElementById("button_sleep").onclick = function() {
    fetch("http://192.168.0.104:8000/suspend", {method: 'GET'})
}

document.getElementById("button_restart").onclick = function() {
    fetch("http://192.168.0.104:8000/restart", {method: 'GET'})
}

document.getElementById("button_off").onclick = function() {
    fetch("http://192.168.0.104:8000/turnOFF", {method: 'GET'})
}