class MonAn {
  constructor(
    tenMonAn,
    maMonAn,
    loaiMonAn,
    giaMonAn,
    kmMonAn,
    tTrangMonAn,
    mTaMonAn
  ) {
    this.tenMonAn = tenMonAn;
    this.maMonAn = maMonAn;
    this.loaiMonAn = loaiMonAn;
    this.giaMonAn = parseInt(giaMonAn);
    this.kmMonAn = kmMonAn;
    this.tTrangMonAn = tTrangMonAn;
    this.mTaMonAn = mTaMonAn;
  }
  giaKM() {
    return this.giaMonAn - (this.giaMonAn * this.kmMonAn) / 100;
  }
}
