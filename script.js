particlesJS("particles-js", {
  "particles": {
    "number": { 
      "value": 60, 
      "density": { "enable": true, "value_area": 800 } 
    },
    "color": { "value": "#00f3ff" },
    "shape": { "type": "circle" },
    "opacity": { 
      "value": 0.9, /* Más visible para que destaque el grosor */
      "random": false 
    },
    "size": { 
      "value": 4, /* Puntos más grandes (antes era 2) */
      "random": true 
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00f3ff",
      "opacity": 0.9, /* Líneas más visibles */
      "width": 1 /* Líneas más gruesas (antes era 1) */
    },
    "move": { 
      "enable": true, 
      "speed": 3, /* Más rápido (antes era 1) */
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 200, "line_linked": { "opacity": 0.8 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});