showProduk()

function mulaiBelajar() {
    let textBaru = "Status: Mulai belajar";

    document.getElementById("status-belajar").innerHTML = textBaru;

    document.getElementById("status-belajar").className = "text-success";
}

function selesaiBelajar() {
    alert("Proses Pembelajaran Selesai!");

    document.getElementById("status-belajar").innerHTML = "Status: Selesai Belajar";

    document.getElementById("status-belajar").className = "text-danger";

}

function showProduk() {
    let tampil_produk = document.getElementById("list-produk");
    for (let i = 0; i < 30; i++) {
    let produk =`
<div class="col-md-3 mb-3 mr-3"> 
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Kue ${i+1}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

    `

    tampil_produk.innerHTML += produk;
}
}