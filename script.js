document.addEventListener("DOMContentLoaded", function () {
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");

    // Wait until all resources (images, audio) are fully loaded
    window.onload = function () {
        introScreen.addEventListener("click", function () {
            this.style.opacity = "0";
            setTimeout(() => {
                this.style.display = "none";
                mainContent.style.display = "block";
                setTimeout(() => {
                    mainContent.style.opacity = "1";
                }, 100);
            }, 1000);
        });
    };
});
