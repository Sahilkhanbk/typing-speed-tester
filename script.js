const textarea = document.querySelector("#userv")
const timer = document.querySelector("#timer")
const btn = document.querySelector(".btn")

let time = 0;
let interval = null;
let isStarted = false;

textarea.addEventListener("input", () => {
    if (!isStarted) {
        isStarted = true

        interval = setInterval(() => {
            time++;
            timer.textContent = time + "s";
        }, 1000)
    }
})

