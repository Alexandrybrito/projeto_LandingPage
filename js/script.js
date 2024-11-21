document.addEventListener('DOMContentLoaded', function () {
    
    // Inicializa AOS.js
    AOS.init();

    // Initializa o Swiper
      let swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
        },
        Keyboard: true,
      });

    
      let menu = document.querySelector("#menu-bar");
      let navbar = document.querySelector(".navbar");

      menu.addEventListener("click", () => {
        navbar.classList.toggle("nav-toggle");
      });


    document.getElementById('commentary').addEventListener('click', function(event) {
    event.preventDefault();
    
    
    fetch('https://dummyjson.com/comments')
        .then(response => response.json())
        .then(data => {
            
            const novaJanela = window.open('', '_blank');
            
            novaJanela.document.write('<html><head><title>Testemunhos</title></head><body>');
            novaJanela.document.write('<h1>Outros comentários de testemunhos</h1>');
            novaJanela.document.write('<h3>Dados meramente fictícios</h3>');
            novaJanela.document.write('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
            novaJanela.document.write('</body></html>');
            novaJanela.document.close();
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
    });

})

