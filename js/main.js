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
  const click1 = document.getElementById("box1-main");

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

  const box2 = document.getElementById('box2');
  const overlay2 = document.getElementById('overlay2')
  const close2 = document.getElementById('close2');

  box2.addEventListener('click', () => {
    overlay2.classList.add('show');
    box2.classList.add('hide');
  });
  close2.addEventListener('click', () => {
    overlay2.classList.remove('show');
    box2.classList.remove('hide');
  });
}