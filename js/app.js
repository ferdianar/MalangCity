$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$(document).ready(function(){
    $(".scr").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 35
        }, 850, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  const el = document.querySelector('.fadeInUp');
  el.classList.add('animated','fadeInUp');
  const subheader = document.querySelector('.subheader').classList.add("animated",'fadeInUp');
  const navbrand = document.querySelector('.navbar-brand').classList.add('animated','slideInLeft');
  const link = document.querySelector('.nav-link').classList.add('animated','slideInDown');
  const bo = document.querySelector('.infiniteBo').classList.add('animated','bounce');
  // Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector(".photo");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("captions");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}