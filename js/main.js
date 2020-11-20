/* 
  highlightjs を有効化します。
  https://highlightjs.org/
 */
var hljs = require('highlight.js');
hljs.initHighlightingOnLoad();

{
  const box1 = document.getElementById('box1');
  const overlay1 = document.getElementById('overlay1');
  const close1 = document.getElementById('close1');
  const click1 = document.getElementById('box1-main-id');
  const clickhere1 = document.getElementById('click-here1');
  const clickhere1anime = document.getElementById('click-here1-anime');
  const box1mainanime = document.getElementById('box1-main-anime');
  
  
  
  box1.addEventListener('click', () => {
    overlay1.classList.add('show');
    box1.classList.add('hide');
  });
  close1.addEventListener('click', () => {
    overlay1.classList.remove('show');
    box1.classList.remove('hide');
  });
  click1.addEventListener("click", () => {
    click1.classList.toggle("box1-transition-animation");
  });
  clickhere1.addEventListener("click", () => {
    click1.classList.toggle("box1-transition-animation");
  });
  clickhere1anime.addEventListener("click", () => {
    box1mainanime.classList.toggle("box1");
  })


  const box2 = document.getElementById('box2');
  const overlay2 = document.getElementById('overlay2');
  const close2 = document.getElementById('close2');
  const click2 = document.getElementById('box2-main-id');
  const clickhere2 = document.getElementById('click-here2');
  const clickhere2anime = document.getElementById('click-here2-anime');
  const box2mainanime = document.getElementById('box2-main-anime');

  box2.addEventListener('click', () => {
    overlay2.classList.add('show');
    box2.classList.add('hide');
  });
  close2.addEventListener('click', () => {
    overlay2.classList.remove('show');
    box2.classList.remove('hide');
  });
  click2.addEventListener("click", () => {
    click2.classList.toggle("box2-transition-animation");
  });
  clickhere2.addEventListener("click", () => {
    click2.classList.toggle("box2-transition-animation");
  });
  clickhere2anime.addEventListener("click", () => {
    box2mainanime.classList.toggle("box2");
  })
}