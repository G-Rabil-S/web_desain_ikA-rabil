

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

function formatHarga(angka) {
    return "Rp " + new Intl.NumberFormat("id-ID").format(angka);
}

function tampilkanProduk() {
    let pilihanproduk = document.getElementById(`pilihanproduk`);
    list_produk.forEach(item => {
        const option = document.createElement("option");
        option.value = item.namaProduk;
        option.innerText = `${item.namaProduk} ${formatHarga(item.hargaProduk)}`;
        pilihanproduk.appendChild(option);
    });
}

function ubahPilihanProduk() {
    const select = document.getElementById(`pilihanproduk`);
    produkTerpilih = list_produk.find(item => item.namaProduk === select.value);

    hitungTotal();
}

function hitungTotal() {
    
    const qty = document.getElementById(`jumlah`).value;
    const total = produkTerpilih.hargaProduk * qty;

    document.getElementById(`totalPemesanan`).innerText = formatHarga(total);
}

function PesanProduk() {
    let konfirmasi = confirm("Apakah anda yakin ingin memesan produk ini?");
    if(konfirmasi) {
        alert(`
            Pembeli ${pembeli.value}
            Berhasil membeli produk 
            ${produkTerpilih.namaProduk} dengan harga ${totalPemesanan.innerText} sebanyak ${jumlah.value} pcs`);
    }else {
        alert("Anda membatalkan pemesanan produk ini");
    }
}