/* 
  highlightjs を有効化します。
  https://highlightjs.org/
 */
hljs.initHighlightingOnLoad();

{
  const box1 = document.getElementById("box1");
  box1.addEventListener("click", () => {
    // toggleとは、エレメントにクラスがなければ付ける。あれば外す。という処理です。
    box1.classList.toggle("box1-animation-add");
  });
}