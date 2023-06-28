let navigation = document.querySelector('.navigation');
let close = document.querySelector('.close');
navigation.onclick = function(){
    addActiveClass();
}
close.onclick = function(){
  navigation.classList.remove('active')
}

// Gọi hàm addActiveClass sau 2 giây (2000 mili giây)
setTimeout(addActiveClass, 1500);

// Hàm thêm class active cho navigation
function addActiveClass() {
  navigation.classList.add('active');
}


// Obtiene el elemento canvas y su contexto de dibujo
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// Establece una matriz de caracteres que se mostrarán en las gotas
let letters = ['1', '0'];

// Establece el alto y ancho del canvas igual al tamaño de la ventana
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Inicializa la matriz de gotas con posiciones iniciales aleatorias
let drops = []
for(let i = 0; i < canvas.width / 15; i++){
  drops.push({x: i * 15, y: Math.ceil(Math.random() * 60) * -15})
}

// Función que dibuja las gotas en el canvas
const drop = () => {
  // Dibuja un rectángulo transparente sobre el canvas para borrar lo que hay
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Recorre la matriz de gotas
  for(let i = 0; i < drops.length; i++) {
    // Genera un carácter aleatorio para mostrar en la gota
    let text = letters[Math.floor(Math.random() * letters.length)];

    // Si la gota ha salido del canvas, la posiciona de nuevo en la parte superior
    if(drops[i].y > canvas.height) {
      drops[i].y = -15;
    }

    // Mueve la gota hacia abajo en la pantalla
    drops[i].y += 15;

    // Configura el estilo y el tamaño de la fuente
    ctx.font = '15px Courier Prime Code';
    ctx.fillStyle = "#00FF40";

    // Dibuja la gota en el canvas
    ctx.fillText(text, drops[i].x, drops[i].y);
  }
}

// Ejecuta la función drop cada 70 milisegundos
setInterval(drop, 70)

// Cuando se redimensiona la ventana, inicializa la matriz de gotas con nuevas
// posiciones aleatorias en función del nuevo tamaño del canvas
window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  drops = []
  for(let i = 0; i < canvas.width / 15; i++){
    drops.push({x: i * 15, y: Math.ceil(Math.random() * 60) * -15})
  }
})
