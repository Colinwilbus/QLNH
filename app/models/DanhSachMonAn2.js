class DanhSachMonAn {
  arrMonAn = [];

  themMonAn(monAn) {
    this.arrMonAn.push(monAn);
  }
  xoaMonAn(maMonAn) {
    const i = this.arrMonAn.findIndex((item) => {
      return item.maMonAn == maMonAn;
    });
    if (i === -1) {
      alert("không tìm thấy index");
    } else {
      this.arrMonAn.splice(i, 1);
    }
  }
  suaMonAn(maMonAn) {
    let kq;
    const i = this.arrMonAn.findIndex((item) => {
      return item.maMonAn == maMonAn;
    });
    if (i === -1) {
      alert("Không tìm thấy index");
    } else {
      kq = this.arrMonAn[i];
    }
    return kq;
  }
  capNhatMonAn(maMonAn) {
    const i = this.arrMonAn.findIndex((item) => {
      return item.maMonAn == maMonAn;
    });
    return i;
  }
}
