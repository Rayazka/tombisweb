$(document).ready(function(){
   $('.logo-carousel').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 520,
        settings: {
         autoplay: true,
         autoplaySpeed: 1000,
          slidesToShow: 1
        }
      }]
    });

   const toTopBtn = document.getElementById('backToTopBtn');
$(window).scroll(function(){
   if($(window).scrollTop() > 300){
      toTopBtn.classList.add('show')
   }else{
      toTopBtn.classList.remove('show')
   }
});
toTopBtn.addEventListener('click', function(e){
   e.preventDefault()
   $('html, body').animate({scrollTop:0}, '300')
})
});

AOS.init({
   duration:1000,
   once:true
});

