function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


function openProject(type, source, title, category, description, software) {

    const modal = document.getElementById("projectModal");
    const media = document.getElementById("modalMedia");

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalCategory").textContent = category;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalSoftware").textContent = software;

    // Alten Inhalt löschen
    media.innerHTML = "";

    if (type === "img") {

        // =========================
        // BILD
        // =========================

        const img = document.createElement("img");

        img.src = source;
        img.alt = title;

        // Bild anklickbar machen
        img.style.cursor = "zoom-in";

        img.addEventListener("click", function(event) {

            event.stopPropagation();

            openFullscreen(source);

        });

        media.appendChild(img);


    } else if (type === "video") {

        // =========================
        // VIDEO
        // =========================

        const video = document.createElement("video");

        video.src = source;

        // Video-Steuerung
        video.controls = true;

        // Automatisch abspielen
        video.autoplay = true;

        // Wiederholen
        video.loop = true;

        // Wichtig für Browser
        video.playsInline = true;

        // Video soll nicht das Projektfenster schließen
        video.addEventListener("click", function(event) {
            event.stopPropagation();
        });

        media.appendChild(video);
    }

    // Projektfenster öffnen
    modal.classList.add("active");
}


function closeProject() {

    const modal = document.getElementById("projectModal");

    modal.classList.remove("active");

    document.getElementById("modalMedia").innerHTML = "";
}


/* =================================
   BILD-VOLLBILD
================================= */

function openFullscreen(src) {

    const fullscreen = document.getElementById("imageFullscreen");
    const image = document.getElementById("fullscreenImage");

    image.src = src;

    fullscreen.style.display = "flex";
}


function closeFullscreen() {

    const fullscreen = document.getElementById("imageFullscreen");

    fullscreen.style.display = "none";

    document.getElementById("fullscreenImage").src = "";
}


/* =================================
   KLICK AUSSERHALB DES PROJEKTFENSTERS
================================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("projectModal");

    if (event.target === modal) {

        closeProject();

    }

});


/* =================================
   ESC-TASTE
================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeFullscreen();
        closeProject();

    }

});