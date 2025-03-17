document.getElementById("intro-screen").addEventListener("click", function() {
    this.style.opacity = "0";
    setTimeout(() => {
        this.style.display = "none";
        document.getElementById("main-content").style.display = "block";
        setTimeout(() => {
            document.getElementById("main-content").style.opacity = "1";
        }, 100);
    }, 1000);
});

// Music Player Controls
const music = document.getElementById("bg-music");
const toggleMusic = document.getElementById("toggle-music");

toggleMusic.addEventListener("click", function() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
