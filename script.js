class SinhVien {
    constructor(maSinhVien, hoTen, gioiTinh, ngaySinh, queQuan) {
        this.maSinhVien = maSinhVien;
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
        this.ngaySinh = ngaySinh;
        this.queQuan = queQuan;
    }
}

class QuanLySinhVien {
    constructor() {
        this.danhSachSinhVien = JSON.parse(localStorage.getItem('danhSachSinhVien')) || [];
    }

    hienThiSinhVien() {
        const tbody = document.querySelector('#bangSinhVien tbody');
        tbody.innerHTML = '';

        this.danhSachSinhVien.forEach((sinhVien, index) => {
            const hang = `<tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.hoTen}</td>
                <td>${sinhVien.gioiTinh}</td>
                <td>${sinhVien.ngaySinh}</td>
                <td>${sinhVien.queQuan}</td>
                <td>
                    <button onclick="suaSinhVien(${index})">Sửa</button>
                    <button onclick="xoaSinhVien(${index})">Xóa</button>
                </td>
            </tr>`;
            tbody.innerHTML += hang;
        });
    }

    themSinhVien(sinhVien) {
        this.danhSachSinhVien.push(sinhVien);
        this.capNhatLocalStorage();
    }

    suaSinhVien(index, sinhVienMoi) {
        this.danhSachSinhVien[index] = sinhVienMoi;
        this.capNhatLocalStorage();
    }

    xoaSinhVien(index) {
        this.danhSachSinhVien.splice(index, 1);
        this.capNhatLocalStorage();
    }

    capNhatLocalStorage() {
        localStorage.setItem('danhSachSinhVien', JSON.stringify(this.danhSachSinhVien));
        this.hienThiSinhVien();
    }
}

const qlsv = new QuanLySinhVien();
qlsv.hienThiSinhVien();

document.getElementById('formSinhVien').addEventListener('submit', function (event) {
    event.preventDefault();

    const maSinhVien = document.getElementById('maSinhVien').value;
    const hoTen = document.getElementById('hoTen').value;
    const gioiTinh = document.getElementById('gioiTinh').value;
    const ngaySinh = document.getElementById('ngaySinh').value;
    const queQuan = document.getElementById('queQuan').value;

    const sinhVien = new SinhVien(maSinhVien, hoTen, gioiTinh, ngaySinh, queQuan);
    qlsv.themSinhVien(sinhVien);

    document.getElementById('formSinhVien').reset();
});

function suaSinhVien(index) {
    const sinhVien = qlsv.danhSachSinhVien[index];
    document.getElementById('maSinhVien').value = sinhVien.maSinhVien;
    document.getElementById('hoTen').value = sinhVien.hoTen;
    document.getElementById('gioiTinh').value = sinhVien.gioiTinh;
    document.getElementById('ngaySinh').value = sinhVien.ngaySinh;
    document.getElementById('queQuan').value = sinhVien.queQuan;

    document.getElementById('formSinhVien').onsubmit = function (event) {
        event.preventDefault();

        const sinhVienMoi = new SinhVien(
            document.getElementById('maSinhVien').value,
            document.getElementById('hoTen').value,
            document.getElementById('gioiTinh').value,
            document.getElementById('ngaySinh').value,
            document.getElementById('queQuan').value
        );

        qlsv.suaSinhVien(index, sinhVienMoi);
        document.getElementById('formSinhVien').reset();
        document.getElementById('formSinhVien').onsubmit = themSinhVienMoi;
    };
}

function xoaSinhVien(index) {
    qlsv.xoaSinhVien(index);
}

function themSinhVienMoi(event) {
    event.preventDefault();

    const maSinhVien = document.getElementById('maSinhVien').value;
    const hoTen = document.getElementById('hoTen').value;
    const gioiTinh = document.getElementById('gioiTinh').value;
    const ngaySinh = document.getElementById('ngaySinh').value;
    const queQuan = document.getElementById('queQuan').value;

    const sinhVien = new SinhVien(maSinhVien, hoTen, gioiTinh, ngaySinh, queQuan);
    qlsv.themSinhVien(sinhVien);

    document.getElementById('formSinhVien').reset();
}
