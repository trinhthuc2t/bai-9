let nhap = document.getElementById('nhap');
function inputValue(value) {
    nhap.value += value;
}
function bang() {
    let bang = eval(nhap.value);
    nhap.value = bang;
}
function xoa() {
    nhap.value = "";
}