document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const desc = card.querySelector('.card-desc'); 
        const arrow = card.querySelector('#card-arrow'); 

        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateZ(100px) scale(1.05)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
            card.style.transition = 'transform 0.5s, box-shadow 0.5s';
        });
        
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateZ(0px) scale(1)';
            card.style.boxShadow = 'none';
            card.style.transition = 'transform 0.5s, box-shadow 0.5s';
        });

        // Logika klik untuk menampilkan atau menyembunyikan deskripsi
        card.addEventListener('click', () => {
            if (desc.style.display === 'none' || desc.style.display === '') {
                desc.style.display = 'block'; 
                arrow.style.transform = 'rotate(180deg)'; 
            } else {
                desc.style.display = 'none'; 
                arrow.style.transform = 'rotate(0deg)'; 
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('hero-img');

    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = '0.5s';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.transition = '0.5s';
    });

});

// jquery autoscroll 
$(document).ready(function() {
    // Tampilkan tombol ketika halaman di-scroll ke bawah
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    // Fungsi scroll ke atas dengan smooth
    $('#scrollTopBtn').click(function() {
        $('html, body').animate({scrollTop: 0}, 'smooth');
        return false;
    });


    //hide navbar
    let prevScrollPos = $(window).scrollTop();
  const navbar = $('.navbar');

  $(window).on('scroll', function() {
    const currentScrollPos = $(window).scrollTop();

    if (prevScrollPos > currentScrollPos) {
      navbar.css('top', '0');
      navbar.fadeIn();
    } else {
      navbar.css('top', '-50px');
      navbar.fadeOut();
    }

    prevScrollPos = currentScrollPos;
  });


  //carrousel
  $('#carouselExampleCaptions').carousel({
    interval: 3000, // Change this value for timing
    ride: 'carousel' // Ensures auto-playing is smooth
  });

});

  