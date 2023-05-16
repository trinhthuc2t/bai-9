let nhap = document.getElementById('nhap');
function inputValue(abc) {
    nhap.value += abc;
}
function bang() {
    let bang = eval(nhap.value);
    nhap.value = bang;
}
function xoa() {
    nhap.value = "";
}