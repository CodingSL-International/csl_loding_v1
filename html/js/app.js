var typingEffect = new Typed(".multiText", {
    strings: typingtext,
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
});
var play = false;
var myAudio = document.getElementById("music");

myAudio.volume = 0.9;

function onKeyDown(event) {
    switch (event.keyCode) {
        case 69:             
            if (play) {
                myAudio.pause();
                play = false;
            } else {
                myAudio.play();
                play = true;
            }
            break;
    }
    return false;
}
window.addEventListener("keydown", onKeyDown, false);

document.addEventListener("DOMContentLoaded", function() {
    let discordButton = document.querySelector(".discord");

    if (discordButton) {

        if (typeof discord !== "undefined" && discord !== "") {
            discordButton.setAttribute("href", discord);
            discordButton.style.display = "inline-block";
            discordButton.style.visibility = "visible";
            discordButton.style.opacity = "1";
        }

    }

     let footerElement = document.getElementById("footer-text");
     if (typeof footertext !== "undefined" && footertext !== "" && footerElement) {
         footerElement.textContent = footertext;
     }

     if (typeof maintext1 !== "undefined" && typeof maintext2 !== "undefined") {
        document.getElementById("mainname").textContent = maintext1;

        document.querySelector(".maintext_2").textContent = maintext2;
        document.querySelector(".maintext_shadow").textContent = maintext1;
        document.querySelector(".maintext_2shadow").textContent = maintext2;
    } 
});

var videoIDs = videoids;

var randomIndex = Math.floor(Math.random() * videoIDs.length);
var selectedVideo = videoIDs[randomIndex];

var embedURL = "https://www.youtube.com/embed/" + selectedVideo + "?autoplay=1" + "&mute=1" + "&controls=0" + "&rel=0" + "&modestbranding=1" + "&loop=1" + "&playlist=" + selectedVideo + "&disablekb=1" + "&fs=0" + "&showinfo=0";

document.getElementById('videoFrame').src = embedURL;