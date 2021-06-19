const dsMonAn = new DsMonAn();

// hiển thị danh sách món ăn
const hienThiDanhSach = (danhSach) => {
  let contentHtml = "";
  danhSach.forEach((item, index) => {
    contentHtml += `
      <tr>
      <td>${item.maMonAn}</td>
      <td>${item.tenMonAn}</td>
      <td>${item.loaiMonAn}</td>
      <td>${item.giaMonAn.toLocaleString("vi-VN")}VND</td>
      <td>${item.kmMonAn}%</td>
      <td>${item.giaKM().toLocaleString("vi-VN")}VND</td>
      <td>${item.tTrangMonAn}</td>
      <td><button class="btn btn-danger" onclick="delItem(${
        item.maMonAn
      })" >Xóa</button></td>
      <td><button class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onclick="editItem(${
        item.maMonAn
      })" >Sửa</button></td>
      </tr>
      `;
  });
  document.getElementById("tbodyFood").innerHTML = contentHtml;
};
// rs input
const resetInput = () => {
  document.getElementById("foodID").value = "";
  document.getElementById("tenMon").value = "";
  document.getElementById("loai").value = "";
  document.getElementById("giaMon").value = "";
  document.getElementById("khuyenMai").value = "";
  document.getElementById("tinhTrang").value = "";
  document.getElementById("moTa").value = "";
};
// close form

// thêm thông tin món ăn
document.getElementById("btnThemMon").onclick = () => {
  console.log("đã thêm");
  const maMonAn = document.getElementById("foodID").value;
  const tenMonAn = document.getElementById("tenMon").value;
  const loaiMonAn = document.getElementById("loai").value;
  const giaMonAn = document.getElementById("giaMon").value;
  const kmMonAn = document.getElementById("khuyenMai").value;
  const tTrangMonAn = document.getElementById("tinhTrang").value;
  const mTaMonAn = document.getElementById("moTa").value;

  const monAn = new MonAn(
    tenMonAn,
    maMonAn,
    loaiMonAn,
    giaMonAn,
    kmMonAn,
    tTrangMonAn,
    mTaMonAn
  );
  dsMonAn.themMonAn(monAn);
  hienThiDanhSach(dsMonAn.arrMonAn);
  resetInput();
  document.getElementById("btnClose").click();
};
// xóa thông tin  món ăn
const delItem = (maMonAn) => {
  console.log(maMonAn);
  dsMonAn.xoaMonAn(maMonAn);
  hienThiDanhSach(dsMonAn.arrMonAn);
};
// sửa thông tin món ăn
const editItem = (maMonAn) => {
  dsMonAn.suaMonAn(maMonAn);
};
// cập nhật
document.getElementById("btnCapNhat").addEventListener("click", () => {
  dsMonAn.capnhatMonAn();
  hienThiDanhSach(dsMonAn.arrMonAn);
  resetInput();
  document.getElementById("btnClose").click();
});
document.getElementById("selLoai").onclick = () => {
  const keywork = document.getElementById("selLoai").value;
  const danhSachMonAnLoc = dsMonAn.locDsMonAn(keywork);
  hienThiDanhSach(danhSachMonAnLoc);
};
