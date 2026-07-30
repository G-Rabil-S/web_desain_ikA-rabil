

let list_produk = [
    {
        namaProduk:"coklat",
        merkProduk:"silverqueen",
        hargaProduk: 20000
    },
    {
        namaProduk:"Kopi",
        merkProduk:"ABC",
        hargaProduk: 10000
    },
    {
        namaProduk:"Teh",
        merkProduk:"Tehpucuk",
        hargaProduk: 5000
    },
];

//menjalankan function pada saat halaman di load
initHalaman();
let produkTerpilih = null;
let riwayatProduk = [];

tampilRiwayat();

function formatHarga(angka) {
    return "Rp " + new Intl.NumberFormat("id-ID").format(angka);
}

function initHalaman() {
    const pilihanProduk = document.getElementById('pilihan_produk');
    list_produk.forEach(item => {
        const option = document.createElement('option');
        option.value = item.namaProduk;
        option.innerText = `${item.namaProduk} (${formatHarga(item.hargaProduk)})`;
        pilihanProduk.appendChild(option);
    });

    
}

function ubahPilihanProduk() {
    const select = document.getElementById(`pilihan_produk`);
    produkTerpilih = list_produk.find(item => item.namaProduk === select.value);

    hitungTotal();
}

function hitungTotal() {
    
    const qty = document.getElementById(`jumlah`).value;
    const total = produkTerpilih.hargaProduk * qty;

    document.getElementById(`total_pemesanan`).innerText = formatHarga(total);
}

function pesanProduk() {
    let konfirmasi = confirm('Apakah kamu yakin ?');

    if(konfirmasi) {
        let pembeli = document.getElementById('nama_pembeli');
        let totalPemesanan = document.getElementById('total_pemesanan');
        const qty = document.getElementById('jumlah').value ?? 0;
        alert(`Pembeli ${pembeli.value} Berhasil Memesan Produk ${produkTerpilih.namaProduk} dengan harga ${totalPemesanan.innerText} sebanyak ${qty}  
        `);

        // Menambahkan data ke riwayatProduk
        let tambahKeRiwayat = {
            no: riwayatProduk.length + 1,
            namaProduk: produkTerpilih.namaProduk,
            merk: produkTerpilih.merkProduk,
            harga: produkTerpilih.hargaProduk,
            pembeli: pembeli.value,
            jumlah: qty,
            total: totalPemesanan.innerText,
        }
        riwayatProduk.push(tambahKeRiwayat);
        tampilRiwayat();
    } else {
        alert('Batal pesan');
    }
}

function tampilRiwayat() {
    const tbody = document.getElementById('table-riwayat');
 
    if(riwayatProduk.length === 0) {
        tbody.innerHTML = `
         <tr>
            <td colspan="5" class="text-center">Belum ada riwayat transaksi</td>
         </tr>
        `;
        return;
    }

    tbody.innerHTML = '';
    riwayatProduk.forEach(item => {
        const addItem = `
        <tr>
          <th scope="row">${item.no}</th>
            <td>${item.namaProduk}</td>
            <td>${item.total}</td>
            <td>${item.pembeli}</td>
            <td>${item.jumlah}</td>
           
        </tr>
        `;
        tbody.innerHTML += addItem;
    });
}