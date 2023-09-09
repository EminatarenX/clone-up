let slideIndex = 1;

function cambiarSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) { slideIndex = 1 }    
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex - 1].style.display = "block";  
}

function iniciarCarrusel() {
    showSlides(slideIndex);
    setInterval(function () {
      cambiarSlide(1);
    }, 25000); 
}




document.addEventListener("DOMContentLoaded", function() {
  iniciarCarrusel();

});
