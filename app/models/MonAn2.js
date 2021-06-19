// khởi tạo lớp đối tượng
class MonAn {
  // method khởi tạo property
  constructor(
    maMonAn,
    tenMonAn,
    loaiMonAn,
    giaMonAn,
    kmMonAn,
    tTrangMon,
    mTaMon
  ) {
    //   khởi tạo property
    this.maMonAn = maMonAn;
    this.tenMonAn = tenMonAn;
    this.loaiMonAn = loaiMonAn;
    this.giaMonAn = giaMonAn;
    this.kmMonAn = kmMonAn;
    this.tTrangMonAn = tTrangMon;
    this.mTaMonAn = mTaMon;
  }
  //   method tính toán giá trị
  giaKM() {
    return this.giaMonAn - (this.giaMonAn * this.kmMonAn) / 100;
  }
}
