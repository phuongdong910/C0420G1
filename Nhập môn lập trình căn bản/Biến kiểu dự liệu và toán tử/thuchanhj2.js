
let ten = prompt('Name');
let CMND= prompt('CMND_Number');
let ngaySinh =prompt('Birth_Day');
let diaChi =prompt('Address');
let loaiKhachHang =prompt('Rate_Customer');
let giamGia =prompt('Sale');
let soNgayThue = prompt('Rent_Day');
let loaiDichVu =prompt('Type_Services');
let loaiPhong =prompt('Type_Room');
let giaDichVu=0;
let tongTien=0;
if (loaiDichVu=='Villa'){
    giaDichVu=500;
    tongTien = giaDichVu*soNgayThue*(1-giamGia/100);

}

else if (loaiDichVu=='House'){
    giaDichVu=300;
    tongTien = giaDichVu*soNgayThue*(1-giamGia/100);
}else {
    giaDichVu=100;
    tongTien = giaDichVu*soNgayThue*(1-giamGia/100);
}

alert('Tên Khách Hàng: '+ten +
    '\n CMND: '+CMND+
    '\nNgày sinh :'+ngaySinh+
    '\nĐịa Chỉ :'+diaChi+
    '\nLoại Khách Hàng :'+loaiKhachHang+
    '\nGiảm giá :' + ''+giamGia+'' +
    '\nSố ngày thuê :' +''+soNgayThue+'' +
    '\nLoại dịch vụ :'+loaiDichVu+'' +
    '\nLoại phòng :'+loaiPhong+
    '\nTổng tiền : '+tongTien);