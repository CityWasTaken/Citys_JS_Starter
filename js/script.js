const header = document.querySelector("h1");
const paragraph = document.querySelector(".special");
const image = document.querySelector("#main-image");
const noteOutput = document.querySelector(".output");
const timerDisplay = document.querySelector("#time");
const buttonTimer = document.querySelector("#start-button");
const buttonRestart = document.querySelector("#restart-button");

header.classList.add("crazy");

header.style.textDecoration = "underline";

// image.setAttribute("src", "https://images.pexels.com/photos/27700804/pexels-photo-27700804/free-photo-of-a-man-is-riding-a-boat-through-a-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

// Insert a new article element into the output section

noteOutput.insertAdjacentHTML("beforeend", `
    <article>
        <h3>new note text</h3>
        <p>Added On: 09-20-2024<p>
    </article>
    `);

// Timers

// window.setTimeout(function () {
//     console.log("time up!");
// }, 3000);

let count = 10;
let started = false


buttonTimer.addEventListener("click", function() {
    if (!started) {
        const timer = setInterval(function () {
            count--;
        
            timerDisplay.innerText = "Time: " + count;    
        
            if (count <= 0) {
                clearInterval(timer);     
            
            timerDisplay.innerText = "Time: 10";
                count = 10;
                started = false;
            }
        }, 500);

        started = true;
    }
});

buttonRestart.addEventListener("click", function() {
    if (count < 10)
        clearInterval(timer.timerDisplay)
});