document.addEventListener("DOMContentLoaded", () => {
    // Otvaranje modala
    document.querySelectorAll(".open-modal").forEach(btn => {
        btn.onclick = () => btn.nextElementSibling.style.display = "block";
    });

    // Zatvaranje modala klikom na X
    document.querySelectorAll(".close-modal").forEach(btn => {
        btn.onclick = () => btn.closest(".modal-overlay").style.display = "none";
    });

    // Zatvaranje modala klikom van modal box-a
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
        overlay.onclick = () => overlay.style.display = "none";
    });

    // Sprečavanje zatvaranja klikom unutar modala
    document.querySelectorAll(".modal").forEach(modal => {
        modal.onclick = e => e.stopPropagation();
    });

    const audio = new Audio("Audio/Clair Obscur_ Expedition 33 (OST) - Une vie à t'aimer (+ VOST) - Short Version Remix.mp3");
    const playBtn = document.getElementById("muzika");

    playBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        if (audio.paused) {
            audio.play();
            playBtn.textContent = "⏸ Pause";
        } else {
            audio.pause();
            playBtn.textContent = "► Play";
        }
    });


    
});
