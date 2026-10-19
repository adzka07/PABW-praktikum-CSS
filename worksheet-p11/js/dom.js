import { saring } from "./data.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

function tandaiTombolAktif(kategoriAktif) {
    barisFilter.querySelectorAll("button").forEach((tombol) => {
        tombol.classList.toggle(
            "aktif",
            tombol.dataset.kategori === kategoriAktif
        );
    });
}

export function buatKartu(proyek, favorit) {
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
    const kolomFavorit = document.createElement("td");
    const tombolFavorit = document.createElement("button");
    tombolFavorit.type = "button";
    tombolFavorit.className = "favorit";
    tombolFavorit.dataset.id = String(proyek.id);
    tombolFavorit.textContent = favorit.includes(proyek.id) ? "★" : "☆";
    tombolFavorit.setAttribute("aria-label", `Favorit ${proyek.judul}`);
    kolomFavorit.append(tombolFavorit);
    baris.append(tugas, mataKuliah, tenggat, status, prioritas, kolomFavorit);
    return baris;
}

export function render(state) {
    wadah.textContent = "";
    tandaiTombolAktif(state.kategoriAktif);
    const tampil = saring(state.daftarProyek, state.kategoriAktif);
    if (tampil.length === 0) {
        pesanKosong.textContent = "Belum ada tugas pada mata kuliah ini.";
        pesanKosong.hidden = false;
        return;
    }
    pesanKosong.hidden = true;
    tampil.forEach((proyek) => wadah.append(buatKartu(proyek, state.favorit)));
}

export function aturMemuat(aktif) {
    pesanMuat.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
    wadah.textContent = "";
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
}
