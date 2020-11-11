/* 
  highlightjs を有効化します。
  https://highlightjs.org/
 */
hljs.initHighlightingOnLoad();

{
  const box1 = document.getElementById('box1');
  const overlay1 = document.getElementById('overlay1');
  const close1 = document.getElementById('close1');

  const box2 = document.getElementById('box2');
  const overlay2 = document.getElementById('overlay2')
  const close2 = document.getElementById('close2');

  box1.addEventListener('click', () => {
    overlay1.classList.add('show');
    box1.classList.add('hide');
  });
  box2.addEventListener('click', () => {
    overlay2.classList.add('show');
    box2.classList.add('hide');
  });

  close1.addEventListener('click', () => {
    overlay1.classList.remove('show');
    box1.classList.remove('hide');
  });
  close2.addEventListener('click', () => {
    overlay2.classList.remove('show');
    box2.classList.remove('hide');
  });
}