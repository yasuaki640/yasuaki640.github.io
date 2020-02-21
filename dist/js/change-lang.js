"use strict";

require("glottologist");

var glot = new Glottologist();
glot["import"]("src/lang.json").then(function () {
  glot.render();
}); //言語切り替え用のイベント処理

var ja = document.getElementById('ja');
var en = document.getElementById('en');
ja.addEventListener('click', function (e) {
  e.preventDefault();
  glot.render('ja');
});
en.addEventListener('click', function (e) {
  e.preventDefault();
  glot.render('en');
});