// Mengambil data dari URL
const params = new URLSearchParams(window.location.search);

const namaKost = params.get("produk");
const hargaKost = parseInt(params.get("harga"));

let produkTerpilih = {
   namaProduk: namaKost,
   hargaProduk: hargaKost
};

let riwayatProduk = [];

// Menjalankan saat halaman dibuka
window.onload = function () {

   const pilihanProduk = document.getElementById("pilihan_produk");

   pilihanProduk.innerHTML = `
        <option value="${hargaKost}" selected>
            ${namaKost}
        </option>
    `;

   hitungTotal();
   tampilRiwayat();
};

// Format Rupiah
function formatHarga(angka) {
   return "Rp " + new Intl.NumberFormat("id-ID").format(angka);
}

// Hitung Total
function hitungTotal() {

   const qty = parseInt(document.getElementById("jumlah").value) || 1;

   const total = produkTerpilih.hargaProduk * qty;

   document.getElementById("total_pemesanan").innerText = formatHarga(total);
}

// Pesan Kost
function pesanProduk() {

   event.preventDefault();

   const pembeli = document.getElementById("nama_pembeli").value;
   const qty = parseInt(document.getElementById("jumlah").value) || 1;

   if (pembeli == "") {
      alert("Nama pembeli harus diisi!");
      return;
   }

   let konfirmasi = confirm("Apakah Anda yakin ingin melakukan pemesanan?");

   if (!konfirmasi) return;

   const total = produkTerpilih.hargaProduk * qty;

   alert(
      "Booking berhasil!\n\n" +
      "Nama Kost : " + produkTerpilih.namaProduk +
      "\nPembeli : " + pembeli +
      "\nLama Sewa : " + qty + " Bulan" +
      "\nTotal : " + formatHarga(total)
   );

   riwayatProduk.push({
      no: riwayatProduk.length + 1,
      namaProduk: produkTerpilih.namaProduk,
      harga: formatHarga(produkTerpilih.hargaProduk),
      pembeli: pembeli,
      jumlah: qty + " Bulan",
      total: formatHarga(total)
   });

   tampilRiwayat();

   document.getElementById("nama_pembeli").value = "";
   document.getElementById("jumlah").value = 1;

   hitungTotal();
}

// ==========================
// Tampilkan Riwayat
// ==========================
function tampilRiwayat() {

   const tbody = document.getElementById("table-riwayat");

   if (riwayatProduk.length === 0) {

      tbody.innerHTML = `
        <tr>
            <td colspan="5" class="text-center">
                Belum ada riwayat transaksi
            </td>
        </tr>
        `;

      return;
   }

   tbody.innerHTML = "";

   riwayatProduk.forEach(item => {

      tbody.innerHTML += `
        <tr>
            <td>${item.no}</td>
            <td>${item.namaProduk}</td>
            <td>${item.harga}</td>
            <td>${item.pembeli}</td>
            <td>${item.jumlah}</td>
        </tr>
        `;

   });

}

function munculkanAlert() {
    alert("Selamat Datang di Netkos!");
}
