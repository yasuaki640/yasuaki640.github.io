import "glottologist";

let glot = new Glottologist();

glot.import("src/lang.json").then(() => {
    glot.render();
});

//言語切り替え用のイベント処理
const ja = document.getElementById('ja');
const en = document.getElementById('en');

ja.addEventListener('click', e => {
    e.preventDefault();
    glot.render('ja');
});

en.addEventListener('click', e => {
    e.preventDefault()
    glot.render('en');
});