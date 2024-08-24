document.getElementById("button_sleep").onclick = function() {
    fetch("http://YOUR IP OR DOMAIN:8000/suspend", {
        method: 'GET',
        mode: 'no-cors'
    }).then(() => {
        window.location.href = '/index.html';
    })
}

document.getElementById("button_restart").onclick = function() {
    fetch("http://YOUR IP OR DOMAIN:8000/restart", {
        method: 'GET',
        mode: 'no-cors'
    }).then(() => {
        window.location.href = '/index.html';
    })
}

document.getElementById("button_off").onclick = function() {
    fetch("http://YOUR IP OR DOMAIN:8000/turnOFF", {
        method: 'GET',
        mode: 'no-cors'
    }).then(() => {
        window.location.href = '/index.html';
    })
}
