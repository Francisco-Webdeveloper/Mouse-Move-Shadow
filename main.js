const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const shadow = 300; // 200px

function handleShadow(event) {
  let { offsetX } = event; // offsetX = event.offsetX // position of the cursor
  let { offsetY } = event; // offsetY = event.offsetY // position of the cursor
  offsetX += event.target.offsetLeft;
  offsetY += event.target.offsetLeft;

  const width = this.offsetWidth; // total width
  const height = this.offsetHeight; // total height

  const shadowX = ((offsetX / width) * shadow) - shadow / 2; // limits of the shadow
  const shadowY = ((offsetY / height) * shadow) - shadow / 2; // limites of the shadow

  text.style.textShadow = `
    ${shadowX}px ${shadowY}px 2px rgba(255,0,0,0.5),
    ${shadowX * -1}px ${shadowY}px 2px rgba(0,255,0,0.5),
    ${shadowY}px ${shadowX * -1}px 2px rgba(60,60,0,0.5),
    ${shadowY * -1}px ${shadowX}px 2px rgba(0,255,255,0.5)
  `;
}

hero.addEventListener('mousemove', handleShadow);