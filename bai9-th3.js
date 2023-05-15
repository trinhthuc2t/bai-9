let view = document.getElementById('nhap');
function inputValue(value) {
    view.value += value;
}
function kq() {
    let kq = eval(nhap.value);
    nhap.value = kq;
}
function xoa() {
    nhap.value = "";
}