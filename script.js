particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 }, // Pocas partículas para no saturar
    "color": { "value": "#00f3ff" }, // Color neón sutil
    "shape": { "type": "circle" },
    "opacity": { "value": 0.2 }, // Muy transparente
    "size": { "value": 2 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00f3ff",
      "opacity": 0.1, // Líneas casi invisibles
      "width": 1
    },
    "move": { "speed": 1 } // Movimiento lento y elegante
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" }, // Se unen al mouse
      "onclick": { "enable": true, "mode": "push" }
    }
  }
});