// let name = prompt("Adınız Nedir ?")

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let minutes = document.querySelector("#minute");
let second = document.querySelector("#second");

let spaceH = ""
let spaceS = ""
let spaceM = ""


let welcome = document.querySelector(".welcome");

name = prompt("What is your name?")

welcome.innerHTML = `Merhaba ${name} Hoşgeldiniz`

function showTime() {
    let time = new Date()

    let d = days[time.getDay()]
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()

    if (h < 10) {
        spaceH = "0"
    } else {
        spaceH = ""
    }

    if (m < 10) {
        spaceM = "0"
    } else {
        spaceM = ""
    }

    if (s < 10) {
        spaceS = "0"
    } else {
        spaceS = ""
    }





    day.innerHTML = d
    hour.innerHTML = spaceH + h
    minutes.innerHTML = spaceM + m
    second.innerHTML = spaceS + s

    setTimeout(showTime, 1000)
}

showTime();

















console.log(`${hour}:${minute}:${second}`)