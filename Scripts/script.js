// typewritter
const app = document.getElementById('typed-text');

if (app) {
  const typewriter = new Typewriter(app, {
    loop: true,
    delay: 70,
  });

  typewriter
    .typeString('Transmissão Automática e Robotizada.')
    .pauseFor(2000)
    .changeDeleteSpeed(15)
    .deleteAll()
    .typeString('Troca de fluidos.')
    .pauseFor(2000)
    .changeDeleteSpeed(15)
    .deleteAll()
    .typeString('Motor, câmbio, freios, suspensão e arrefecimento.')
    .pauseFor(2000)
    .changeDeleteSpeed(15)
    .deleteAll()
    .start();
}


//scroll - removendo # da url
 document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Atualiza a URL sem o "#"
        history.pushState(null, '', window.location.pathname);
      }
    });
  });

  //Ocultar icones instagram e whats ao rolar para baixo
  let lastScrollTop = 0;
const socialIcons = document.querySelector('.social-home-fixed');

window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // scroll down - esconder
    socialIcons.style.opacity = '0';
    socialIcons.style.pointerEvents = 'none';
  } else {
    // scroll up - mostrar
    socialIcons.style.opacity = '1';
    socialIcons.style.pointerEvents = 'auto';
  }
  lastScrollTop = st <= 0 ? 0 : st; // para evitar valores negativos
});
