const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

function buatKartu(proyek) {
    const baris = document.createElement("tr");
    const tugas = document.createElement("th");
    tugas.scope = "row";
    tugas.textContent = proyek.judul;
    const mataKuliah = document.createElement("td");
    mataKuliah.textContent = proyek.mataKuliah;
    const tenggat = document.createElement("td");
    tenggat.textContent = proyek.tenggat;
    const status = document.createElement("td");
    status.textContent = proyek.selesai ? "Selesai" : "Berjalan";
    const prioritas = document.createElement("td");
    const lencana = document.createElement("span");
    lencana.className = `lencana prioritas-${proyek.prioritas.toLowerCase()}`;
    lencana.textContent = proyek.prioritas;
    prioritas.append(lencana);
    baris.append(tugas, mataKuliah, tenggat, status, prioritas);
    return baris;
}

export function render(daftar) {
    wadah.textContent = "";
    if (daftar.length === 0) {
        pesanKosong.textContent = "Belum ada tugas pada mata kuliah ini.";
        pesanKosong.hidden = false;
        return;
    }
    pesanKosong.hidden = true;
    daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

export function pasangFilter(daftar) {
    barisFilter.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");
        if (!tombol) return;
        const kategori = tombol.dataset.kategori;
        const terpilih = daftar.filter(
            (proyek) => kategori === "semua" || proyek.kategori === kategori
        );
        barisFilter.querySelectorAll("button").forEach((item) => {
            item.classList.toggle("aktif", item === tombol);
        });
        render(terpilih);
    });
}

export function aturMemuat(aktif) {
    pesanMuat.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
    wadah.textContent = "";
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
}
