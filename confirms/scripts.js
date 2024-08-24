document.getElementById("button_sleep").onclick = function() {
    fetch("http://192.168.0.104:8000/suspend", {
        method: 'GET',
        mode: 'no-cors'
    }).then(() => {
        window.location.href = 'https://golian.vercel.app';
    }).catch(() => {
        window.location.href = 'https://golian.vercel.app';
    });
}

document.getElementById("button_restart").onclick = function() {
    fetch("http://192.168.0.104:8000/restart", {
        method: 'GET',
        mode: 'no-cors'
    }).then(() => {
        window.location.href = 'https://golian.vercel.app';
    }).catch(() => {
        window.location.href = 'https://golian.vercel.app';
    });
}

document.getElementById("button_off").onclick = function() {
    fetch("http://192.168.0.104:8000/turnOFF", {
        method: 'GET',
        mode: 'no-cors'
    }).then(() => {
        window.location.href = 'https://golian.vercel.app';
    }).catch(() => {
        window.location.href = 'https://golian.vercel.app';
    });
}