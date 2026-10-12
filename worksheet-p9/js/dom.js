import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#kosong");
const form = document.querySelector("#form-tugas");
const kolom = Array.from(form.querySelectorAll("input, select"));
const tombolKirim = form.querySelector("button[type=submit]");

function buatKartu(proyek) {
    const baris = document.createElement("tr");
    const tugas = document.createElement("th");
    tugas.scope = "row";
    tugas.textContent = proyek.judul;
    const teknologi = document.createElement("td");
    teknologi.textContent = proyek.mataKuliah;
    const tahun = document.createElement("td");
    tahun.textContent = proyek.tenggat;
    const status = document.createElement("td");
    status.textContent = proyek.selesai ? "Selesai" : "Berjalan";
    const prioritas = document.createElement("td");
    const lencana = document.createElement("span");
    lencana.className = `lencana prioritas-${proyek.prioritas.toLowerCase()}`;
    lencana.textContent = proyek.prioritas;
    prioritas.append(lencana);
    baris.append(tugas, teknologi, tahun, status, prioritas);
    return baris;
}

function render(daftar) {
    wadah.textContent = "";
    if (daftar.length === 0) {
        pesanKosong.hidden = false;
        return;
    }
    pesanKosong.hidden = true;
    const fragmen = document.createDocumentFragment();
    daftar.forEach((proyek) => fragmen.append(buatKartu(proyek)));
    wadah.append(fragmen);
}

function tandaiTombolAktif(tombolAktif) {
    barisFilter.querySelectorAll("button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    const kategori = tombol.dataset.kategori;
    const terpilih = daftarProyek.filter(
        (proyek) => kategori === "semua" || proyek.kategori === kategori
    );
    tandaiTombolAktif(tombol);
    render(terpilih);
});

function validasiKolom(input) {
    const valid = input.value.trim() !== "";
    input.setAttribute("aria-invalid", String(!valid));
    input.closest(".form-kolom").querySelector(".pesan-galat").hidden = valid;
    return valid;
}

function perbaruiValidasi() {
    const semuaValid = kolom.map(validasiKolom).every(Boolean);
    tombolKirim.disabled = !semuaValid;
    return semuaValid;
}

kolom.forEach((input) => input.addEventListener("input", () => {
    validasiKolom(input);
    perbaruiValidasi();
}));
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!perbaruiValidasi()) {
        kolom.find((input) => input.getAttribute("aria-invalid") === "true")?.focus();
        return;
    }
    form.reset();
    perbaruiValidasi();
});

kolom.forEach((input) => input.setAttribute("aria-invalid", "true"));
perbaruiValidasi();
render(daftarProyek);
