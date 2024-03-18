'use strict'

// モーダル1
//要素を取得
const modal = document.querySelector('.jsModal'),
      open = document.querySelector('.jsModalOpen'),
      close = document.querySelector('.jsModalClose');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
  modal.classList.add('isActive');
}
open.addEventListener('click', modalOpen);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
  modal.classList.remove('isActive');
}
close.addEventListener('click', modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(e) {
  if (e.target == modal) {
    modal.classList.remove('isActive');
  }
}
addEventListener('click', modalOut);

// モーダル2
//要素を取得
const modal2 = document.querySelector('.jsModal2'),
      open2 = document.querySelector('.jsModalOpen2'),
      close2 = document.querySelector('.jsModalClose2');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen2() {
  modal2.classList.add('isActive2');
}
open2.addEventListener('click', modalOpen2);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose2() {
  modal2.classList.remove('isActive2');
}
close2.addEventListener('click', modalClose2);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut2(e) {
  if (e.target == modal2) {
    modal2.classList.remove('isActive2');
  }
}
addEventListener('click', modalOut2);

// モーダル3
//要素を取得
const modal3 = document.querySelector('.jsModal3'),
      open3 = document.querySelector('.jsModalOpen3'),
      close3 = document.querySelector('.jsModalClose3');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen3() {
  modal3.classList.add('isActive3');
}
open3.addEventListener('click', modalOpen3);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose3() {
  modal3.classList.remove('isActive3');
}
close3.addEventListener('click', modalClose3);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut3(e) {
  if (e.target == modal3) {
    modal3.classList.remove('isActive3');
  }
}
addEventListener('click', modalOut3);

// モーダル2
//要素を取得
const modal4 = document.querySelector('.jsModal4'),
      open4 = document.querySelector('.jsModalOpen4'),
      close4 = document.querySelector('.jsModalClose4');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen4() {
  modal4.classList.add('isActive4');
}
open4.addEventListener('click', modalOpen4);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose4() {
  modal4.classList.remove('isActive4');
}
close4.addEventListener('click', modalClose4);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut4(e) {
  if (e.target == modal4) {
    modal4.classList.remove('isActive4');
  }
}
addEventListener('click', modalOut4);