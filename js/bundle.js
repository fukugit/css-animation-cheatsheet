(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
