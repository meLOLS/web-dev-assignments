const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-img");

const closeButton = document.querySelector(".close");

galleryImages.forEach(image => {

    image.addEventListener("click", function(){

        lightbox.style.display = "flex";

        lightboxImage.src = this.src;

    });

});

closeButton.addEventListener("click", function(){

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function(e){

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});