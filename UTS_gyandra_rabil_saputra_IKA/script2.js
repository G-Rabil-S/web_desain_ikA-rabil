function ubahPilihanProduk() {
    const select = document.getElementById(`pilihan_produk`);
    produkTerpilih = list_produk.find(item => item.namaProduk === select.value);

    hitungTotal();
}