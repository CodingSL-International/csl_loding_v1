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


      // Called when the YouTube player is ready.
      function videoLoaded(event) {
        var slider = document.getElementById("imageSlider");
        slider.classList.add("fade-out");
        // Remove the slider after the fade-out transition.
        setTimeout(function () {
          slider.style.display = "none";
        }, 500);
      }

      // Optional: handle state changes if needed.
      function onPlayerStateChange(event) {
        // You can use event.data to handle different player states.
      }

      // Randomize the order of slides in the image slider.
      (function () {
        var sliderContainer = document.getElementById("imageSlider");
        var slides = Array.from(sliderContainer.getElementsByClassName("slide"));

        // Fisher-Yates shuffle
        function shuffle(array) {
          for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        }
        slides = shuffle(slides);

        // Clear container and append slides in the new order.
        sliderContainer.innerHTML = "";
        slides.forEach(function (slide, index) {
          if (index === 0) {
            slide.classList.add("active");
          } else {
            slide.classList.remove("active");
          }
          sliderContainer.appendChild(slide);
        });

        // Automatic slide transition every 3 seconds.
        var currentSlide = 0;
        setInterval(function nextSlide() {
          slides[currentSlide].classList.remove("active");
          currentSlide = (currentSlide + 1) % slides.length;
          slides[currentSlide].classList.add("active");
        }, 3000);
      })();