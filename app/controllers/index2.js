const dSMonAn = new DanhSachMonAn();
// hiển thị mảng DSMonAn ra màn hình
const hienThiDanhSach = (dSHienThi) => {
  let contentHtml = "";
  dSHienThi.forEach((item, index) => {
    contentHtml += `
        <tr>
        <td>${item.maMonAn}</td>
        <td>${item.tenMonAn}</td>
        <td>${item.loaiMonAn}</td>
        <td>${item.giaMonAn.toLocaleString("vi-VN")} VNĐ</td>
        <td>${item.kmMonAn} %</td>
        <td>${item.giaKM().toLocaleString("vi-VN")} VNĐ</td>
        <td>${item.tTrangMonAn}</td>
        <td><button class="btn btn-danger" onclick="delItem(${
          item.maMonAn
        })" >Xóa</button>
        <button class="btn btn-info" onclick="editItem(${
          item.maMonAn
        })" style="display:block" data-toggle="modal" data-target="#exampleModal" >Sửa</button></td>
        </tr>
        `;
  });
  document.getElementById("tbodyFood").innerHTML = contentHtml;
};
// dom input
const domInput = () => {
  const input = document.querySelectorAll("#foodForm input");
  console.log(input);
  input.forEach((item, index) => {
    const inputValue = item.value;
    console.log(inputValue);
  });
};

// Thêm món ăn vào mảng
document.getElementById("btnThemMon").addEventListener("click", () => {
  //   const maMonAn = document.getElementById("foodID").value;
  //   const tenMonAn = document.getElementById("tenMon").value;
  //   const loaiMonAn = document.getElementById("loai").value;
  //   const giaMonAn = document.getElementById("giaMon").value;
  //   const kmMonAn = document.getElementById("khuyenMai").value;
  //   const tTrangMonAn = document.getElementById("tinhTrang").value;
  //   const mTaMonAn = document.getElementById("moTa").value;
  const valueInput = domInput();

  //   const monAn = new MonAn(
  //     maMonAn,
  //     tenMonAn,
  //     loaiMonAn,
  //     giaMonAn,
  //     kmMonAn,
  //     tTrangMonAn,
  //     mTaMonAn
  //   );

  //   dSMonAn.themMonAn(monAn);
  //   console.log(dSMonAn.arrMonAn);
  //   hienThiDanhSach(dSMonAn.arrMonAn);
  //   domInput("", "", "", "", "", "", "");

  //   document.getElementById("btnClose").click();
});
// xóa thông tin món ăn có sẵn
const delItem = (maMonAn) => {
  console.log(maMonAn);
  dSMonAn.xoaMonAn(maMonAn);

  hienThiDanhSach(dSMonAn.arrMonAn);
};
// sửa thông tin món ăn có sẵn
const editItem = (maMonAn) => {
  console.log(maMonAn);
  const kq = dSMonAn.suaMonAn(maMonAn);
  console.log(kq);
  //   domInput(
  //     kq.maMonAn,
  //     kq.tenMonAn,
  //     kq.loaiMonAn,
  //     kq.giaMonAn,
  //     kq.kmMonAn,
  //     kq.tTrangMonAn,
  //     kq.mTaMonAn
  //   );
};

// cập nhật thông tin món ăn có sẵn
const updateItem = () => {
  const maMonAn = document.getElementById("foodID").value;
  const tenMonAn = document.getElementById("tenMon").value;
  const loaiMonAn = document.getElementById("loai").value;
  const giaMonAn = document.getElementById("giaMon").value;
  const kmMonAn = document.getElementById("khuyenMai").value;
  const tTrangMonAn = document.getElementById("tinhTrang").value;
  const mTaMonAn = document.getElementById("moTa").value;
  let kq = dSMonAn.capNhatMonAn(maMonAn);
  if (kq === -1) {
    alert("không tìm thấy index");
  } else {
    console.log(kq);
    const monAnCapNhat = new MonAn(
      maMonAn,
      tenMonAn,
      loaiMonAn,
      giaMonAn,
      kmMonAn,
      tTrangMonAn,
      mTaMonAn
    );
    dSMonAn.arrMonAn[kq] = monAnCapNhat;
    hienThiDanhSach(dSMonAn.arrMonAn);
    // domInput("", "", "", "", "", "", "");
    document.getElementById("btnClose").click();
  }
};
