/* 
  highlightjs を有効化します。
  https://highlightjs.org/
 */
hljs.initHighlightingOnLoad();

{
  // const box1 = document.getElementById("box1");
  // box1.addEventListener("click", () => {
  //   // toggleとは、エレメントにクラスがなければ付ける。あれば外す。という処理です。
  //   box1.classList.toggle("box1-animation-add");
  // });

  const box1 = document.getElementById('box1');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  box1.addEventListener('click', () => {
    overlay.classList.add('show');
    box1.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    box1.classList.remove('hide');
  })
}