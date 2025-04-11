const vinilos = [
    "img/vinyl/reflexiones.png",
    "img/vinyl/jose.png",
    "img/vinyl/en_las_buenas.png",
    "img/vinyl/40y20.png",
    "img/vinyl/distancia.png",
    "img/vinyl/siempre_contigo.png" 
  ];
  
  let actual = 0;
  
  function nextVinilo() {
    const vinilo = document.getElementById('vinilo');
    vinilo.classList.add('animar');
  
    setTimeout(() => {
      actual = (actual + 1) % vinilos.length;
      vinilo.src = vinilos[actual];
      vinilo.classList.remove('animar');
    }, 500);
  }
  
  function prevVinilo() {
    const vinilo = document.getElementById('vinilo');
    vinilo.classList.add('animar');
  
    setTimeout(() => {
      actual = (actual - 1 + vinilos.length) % vinilos.length;
      vinilo.src = vinilos[actual];
      vinilo.classList.remove('animar');
    }, 500);
  }
  