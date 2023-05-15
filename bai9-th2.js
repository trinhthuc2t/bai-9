function up() {
    let elemen = document.getElementById('nobita');
    elemen.style.top = parseInt(elemen.style.top) - 5 + 'px';
}
function down() {
    let elemen = document.getElementById('nobita');
    elemen.style.top = parseInt(elemen.style.top) + 5 + 'px';
}
function left () {
    let elemen = document.getElementById('nobita');
    elemen.style.left = parseInt(elemen.style.left) - 5 + 'px';
}
function right () {
    let elemen = document.getElementById('nobita')
    elemen.style.left = parseInt(elemen.style.left) + 5 + 'px';
}
function move (evt) {
    switch (evt.keyCode) {
        case 37:
            left();
            break;
        case 39:
            right() ;
            break
        case 38:
            up();
            break
        case 40:
            down();
            break
    }
}
function run() {
    window.addEventListener('keydown', move);
}