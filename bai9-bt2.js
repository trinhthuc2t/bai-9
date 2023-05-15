
    function tinh(){
        let a = parseFloat(document.getElementById('thang').value)
        switch (a) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById('hienthi').innerHTML = "Tháng " + a + " Có 31 ngày";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById('hienthi').innerHTML ="Tháng " + a + " có 30 ngày"
                break;
            case 2:
                document.getElementById('hienthi').innerHTML = "Tháng " + a + " Có 28 hoặc 29 ngày";
                break;
            default:
                    document.getElementById('hienthi').innerHTML = "Vui lòng nhập lại tháng";
        }
    }