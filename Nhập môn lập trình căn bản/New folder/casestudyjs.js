function init(){
    var name1 = document.getElementById("name1");
    var cmnd = document.getElementById("cmnd");
    var birthday = document.getElementById("birthday");
    var yourEmail = document.getElementById("yourEmail");
    var yourAddress = document.getElementById("yourAddress");
    var customerService = document.getElementById("customerService");
    var bargain = document.getElementById("bargain");
    var people = document.getElementById("people");
    var rentDay = document.getElementById("rentDay");
    var roomChoice = document.getElementById("roomChoice");
    var roomSelect = document.getElementById("roomSelect");
    var totalPay=0;
    var result = document.getElementById("result");
    var regInfo = document.getElementById("regInfo");
    var regTable = document.getElementById("regTable");
}

function checkValid(){
    let check=true;
    while (check){
        if (Number.isNaN(cmnd.value*1)){
            cmnd.value = prompt("Nhap Lai so cmnd:");
        } else if (cmnd.value==""){
            cmnd.value = prompt("Nhap Lai so cmnd:");
        } else if ((cmnd.value*1<100000000)||(cmnd.value*1>999999999)){
            cmnd.value = prompt("Nhap Lai so cmnd:");
        } else check=false;
    }
}

function Calculation(){
    checkValid();
    if (roomSelect.value == "Villa"){totalPay = 500*(rentDay.value*1)*(1-bargain.value*1);}
    else if (roomSelect.value == "House"){totalPay = 300*(rentDay.value*1)*(1-bargain.value*1);}
    else if (roomSelect.value == "Room"){totalPay = 100*(rentDay.value*1)*(1-bargain.value*1);}
    result.innerHTML = "<tr><td><b>Tên:</b></td><td>"+name1.value+"</td></tr>"+
        "<tr><td><b>CMND:</b></td><td>"+cmnd.value+"</td></tr>"+
        "<tr><td><b>Số tiền phải trả:<b></b></td><td>"+totalPay+" USD</td></tr>";
}
function ShowInfo() {
    result.innerHTML = "<tr><td><b>Tên:</b></td><td>"+name1.value+"</td></tr>"+
        "<tr><td><b>CMND:</b></td><td>"+cmnd.value+"</td></tr>"+
        "<tr><td><b>Năm sinh:</b></td><td>"+birthday.value+"</td></tr>"+
        "<tr><td><b>Địa chỉ mail:</b></td><td>"+yourEmail.value+"</td></tr>"+
        "<tr><td><b>Địa chỉ nhà:</b></td><td>"+yourAddress.value+"</td></tr>"+
        "<tr><td><b>Thẻ thành viên:</b></td><td>"+customerService.value+"</td></tr>"+
        "<tr><td><b>Mã giảm giá:</b></td><td>"+bargain.value*100+"%</td></tr>"+
        "<tr><td><b>Người đi kèm:</b></td><td>"+people.value+"</td></tr>"+
        "<tr><td><b>Số ngày thuê:</b></td><td>"+rentDay.value+"</td></tr>"+
        "<tr><td><b>Kiểu phòng:</b></td><td>"+roomSelect.value+"</td></tr>"+
        "<tr><td><b>Chất lượng phòng:</b></td><td>"+roomChoice.value+"</td></tr>";
}
function EditInfo() {
    let bargain1;
    name1.value = prompt("Nhập tên:");
    cmnd.value = prompt("Nhập CMND");
    birthday.value = prompt("Ngày tháng năm Sinh(Year-Month-Day):");
    yourEmail.value = prompt("Nhập mail");
    yourAddress.value = prompt("Nhập địa chỉ 1.DaNang 2.Hue 3.QuangNam");
    customerService.value = prompt("Nhập thẻ thành viên 1.Diamond 2.Platinum 3.Gold 4.Silver 5.Member");
    bargain1 = prompt("Nhập mã giảm giá 1.10% 2.15% 3.20% 4.25% 5.30%");
    switch(bargain1) {
        case "10%":
            bargain.value = "0.1";
            break;
        case "15%":
            bargain.value = "0.15";
            break;
        case "20%":
            bargain.value = "0.2";
            break;
        case "25%":
            bargain.value = "0.25";
            break;
        case "30%":
            bargain.value = "0.3";
            break;
        default:
            bargain.value = null;
            break;
    }
    people.value = prompt("Nhập số người đi kèm:");
    rentDay.value = prompt("Nhập số ngày thuê:");
    roomSelect.value = prompt("Nhập kiểu phòng 1.Villa 2.House 3.Room");
    roomChoice.value = prompt("Nhập chất lượng phòng 1.Vip 2.Business 3.Normal");
}
function Payment(){
    let currentYear = new Date().getFullYear();
    let birthday1 = new Date(birthday.value).getFullYear();
    let payOld = currentYear - birthday1;

    if (roomSelect.value == "Villa"){totalPay = 500*(rentDay.value*1)*(1-bargain.value*1);}
    else if (roomSelect.value == "House"){totalPay = 300*(rentDay.value*1)*(1-bargain.value*1);}
    else if (roomSelect.value == "Room"){totalPay = 100*(rentDay.value*1)*(1-bargain.value*1);}

    if (yourAddress.value=="DaNang"){totalPay -= 20;}
    else if (yourAddress.value=="Hue") {totalPay -= 10;}
    else if (yourAddress.value=="QuangNam") {totalPay -= 5;}

    if (rentDay.value*1>7){totalPay -= 30;}
    else if (rentDay.value*1>=5) {totalPay -= 20;}
    else if (rentDay.value>=2) {totalPay -= 10;}

    if (customerService.value=="Diamond"){totalPay -= 15;}
    else if (customerService.value=="Platinum") {totalPay -= 10;}
    else if (customerService.value=="Gold") {totalPay -= 5;}
    else if (customerService.value=="Silver") {totalPay -= 2;}
    else if (customerService.value=="Member") {totalPay -= 0;}

    if ((payOld>30)&&(yourAddress.value=="DaNang")) {totalPay -= 2;}
    else if ((payOld>=20)&&(yourAddress.value=="DaNang")) {totalPay -= 1;}

    result.innerHTML = "<tr><td><b>Tên:</b></td><td>"+name1.value+"</td></tr>"+
        "<tr><td><b>CMND:</b></td><td>"+cmnd.value+"</td></tr>"+
        "<tr><td><b>Số tiền phải trả:<b></b></td><td>"+totalPay+" USD</td></tr>";
}