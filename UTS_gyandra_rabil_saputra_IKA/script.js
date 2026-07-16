
function munculkanPopUp() {
    alert("Apakah anda yakin ingin menyewa kamar ini?");
}

function konfirmasiSewa() {
     let proses = confirm("Apakah anda yakin ingin menyewa kamar ini?");
     if(proses) {
        alert("Terima kasih telah menyewa kamar ini");
     }else {
        alert("Anda membatalkan penyewaan kamar ini");
     }
}

function konfirmasiPromo() {
     let proses = confirm("apakah anda yakin ingin menggunakan promo ini?");
     if(proses) {
        alert("Terima kasih telah menggunakan promo ini");
     }else {
        alert("Anda membatalkan penggunaan promo ini");
     }
}