class DsMonAn {
  // Mảng chứa các món ăn đc nhập vào
  arrMonAn = [];
  // method
  themMonAn(monAn) {
    this.arrMonAn.push(monAn);
  }
  xoaMonAn(maMonAn) {
    const i = this.arrMonAn.findIndex((item) => {
      return item.maMonAn == maMonAn;
    });
    if (i === -1) {
      alert("không tìm thấy index phù hợp");
    } else {
      alert("đã xóa món ăn", this.arrMonAn[i].tenMonAn);
      this.arrMonAn.splice(i, 1);
    }
  }
  suaMonAn(maMonAn) {
    const i = this.arrMonAn.findIndex((item) => {
      return item.maMonAn == maMonAn;
    });
    if (i === -1) {
      alert("không tìm thấy index");
    } else {
      document.getElementById("foodID").value = this.arrMonAn[i].maMonAn;
      document.getElementById("tenMon").value = this.arrMonAn[i].tenMonAn;
      document.getElementById("loai").value = this.arrMonAn[i].loaiMonAn;
      document.getElementById("giaMon").value = this.arrMonAn[i].giaMonAn;
      document.getElementById("khuyenMai").value = this.arrMonAn[i].kmMonAn;
      document.getElementById("tinhTrang").value = this.arrMonAn[i].tTrangMonAn;
      document.getElementById("moTa").value = this.arrMonAn[i].mTaMonAn;
    }
  }
  capnhatMonAn() {
    const maMonAn = document.getElementById("foodID").value;
    const tenMonAn = document.getElementById("tenMon").value;
    const loaiMonAn = document.getElementById("loai").value;
    const giaMonAn = document.getElementById("giaMon").value;
    const kmMonAn = document.getElementById("khuyenMai").value;
    const tTrangMonAn = document.getElementById("tinhTrang").value;
    const mTaMonAn = document.getElementById("moTa").value;

    const i = this.arrMonAn.findIndex((item) => {
      return item.maMonAn == maMonAn;
    });
    if (i === -1) {
      alert("không tìm thấy index");
    } else {
      const monAnCapNhat = new MonAn(
        tenMonAn,
        maMonAn,
        loaiMonAn,
        giaMonAn,
        kmMonAn,
        tTrangMonAn,
        mTaMonAn
      );
      this.arrMonAn[i] = monAnCapNhat;
      console.log("đã cập nhật", this.arrMonAn[i]);
    }
  }
  locDsMonAn(keywork) {
    let dSMonAnLoc;
    if (keywork == "all") {
      dSMonAnLoc = this.arrMonAn;
    } else {
      dSMonAnLoc = this.arrMonAn.filter((item) => {
        return item.loaiMonAn == keywork;
      });
    }
    return dSMonAnLoc;
  }
}
