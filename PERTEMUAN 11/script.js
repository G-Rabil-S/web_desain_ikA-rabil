
function munculkanAlert() {
    alert("Pesanan Berhasil dipesan!!");
}

function konfirmasiPembayaran() {
    let proses = confirm("Apakah kamu yakin memesan produk ini?");

    if(proses) {
        alert('Selamat berhasil memesan barang')
    } else {
        alert('Gagal memesan barang mungkin lain kali')
    }
}