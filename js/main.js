/* 
  highlightjs を有効化します。
  https://highlightjs.org/
 */
var hljs = require('highlight.js');
hljs.initHighlightingOnLoad();

{
  const thumbnailBbox1 = document.getElementById('box1');
  const overlay1 = document.getElementById('overlay1');
  const close1 = document.getElementById('close1');
  const boxmainid1 = document.getElementById('box1-main-id-transition');
  const box1mainanime = document.getElementById('box1-main-id-animation');
  const buttonForAnimation1 = document.getElementById('button-animation-1');
  const buttonForTransition1 = document.getElementById('button-transition-1');
  
  thumbnailBbox1.addEventListener('click', () => {
    overlay1.classList.add('show');
  });
  close1.addEventListener('click', () => {
    overlay1.classList.remove('show');
  });
  buttonForAnimation1.addEventListener("click", () => {
    box1mainanime.classList.toggle("box1-main-animation");
    const label = buttonForAnimation1.textContent;
    if (label === 'start') {
      document.getElementById('button-animation-1').textContent = 'stop';
    } else if (label === 'stop') {
      document.getElementById('button-animation-1').textContent = 'start';
    }
  });
  boxmainid1.addEventListener("click", () => {
    boxmainid1.classList.toggle("box1-main-transition-additional");
  });
  buttonForTransition1.addEventListener("click", () => {
    boxmainid1.classList.toggle("box1-main-transition-additional");
  });

  const box2 = document.getElementById('box2');
  const overlay2 = document.getElementById('overlay2');
  const close2 = document.getElementById('close2');
  const boxmainid2 = document.getElementById('box2-main-id');
  const buttonanime2 = document.getElementById('button-anime-2');
  const buttontran2 = document.getElementById('button-transition-2');
  const box2mainanime = document.getElementById('box2-main-anime');
  
  box2.addEventListener('click', () => {
    overlay2.classList.add('show');
    box2.classList.add('hide');
  });
  close2.addEventListener('click', () => {
    overlay2.classList.remove('show');
    box2.classList.remove('hide');
  });
  buttonanime2.addEventListener("click", () => {
    box2mainanime.classList.toggle("box2-main-animation");
    const label = buttonanime2.textContent;
    if (label === 'start') {
      document.getElementById('button-anime-2').textContent = 'stop';
    } else if (label === 'stop') {
      document.getElementById('button-anime-2').textContent = 'start';
    }
  });
  boxmainid2.addEventListener("click", () => {
    boxmainid2.classList.toggle("box2-main-transition-additional");
  });
  buttontran2.addEventListener("click", () => {
    boxmainid2.classList.toggle("box2-main-transition-additional");
  });


  const box3 = document.getElementById('box3');
  const overlay3 = document.getElementById('overlay3');
  const close3 = document.getElementById('close3');
  const boxmainid3 = document.getElementById('box3-main-id');
  const buttonanime3 = document.getElementById('button-anime-3');
  const buttontran3 = document.getElementById('button-transition-3');
  const box3mainanime = document.getElementById('box3-main-anime');
  
  box3.addEventListener('click', () => {
    overlay3.classList.add('show');
    box3.classList.add('hide');
  });
  close3.addEventListener('click', () => {
    overlay3.classList.remove('show');
    box3.classList.remove('hide');
  });
  buttonanime3.addEventListener("click", () => {
    box3mainanime.classList.toggle("box3-main-animation");
    const label = buttonanime3.textContent;
    if (label === 'start') {
      document.getElementById('button-anime-3').textContent = 'stop';
    } else if (label === 'stop') {
      document.getElementById('button-anime-3').textContent = 'start';
    }
  });
  boxmainid3.addEventListener("click", () => {
    boxmainid3.classList.toggle("box3-main-transition-additional");
  });
  buttontran3.addEventListener("click", () => {
    boxmainid3.classList.toggle("box3-main-transition-additional");
  });
}