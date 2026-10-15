import { ambilProyek } from "./api.js";
import { render, pasangFilter, aturMemuat, tampilkanGalat } from "./dom.js";

const pengalihTema = document.querySelector("#tema");
const labelTema = document.querySelector(".tombol-tema");
const temaTersimpan = localStorage.getItem("tema");

function terapkanTema(tema) {
    const gelap = tema === "dark";
    document.documentElement.dataset.theme = tema;
    pengalihTema.checked = gelap;
    labelTema.textContent = gelap ? "Tema terang" : "Tema gelap";
    labelTema.setAttribute("aria-label", gelap ? "Ganti ke tema terang" : "Ganti ke tema gelap");
}

terapkanTema(temaTersimpan === "dark" ? "dark" : "light");
pengalihTema.addEventListener("change", () => {
    const temaBerikutnya = pengalihTema.checked ? "dark" : "light";
    localStorage.setItem("tema", temaBerikutnya);
    terapkanTema(temaBerikutnya);
});

async function muat() {
    aturMemuat(true);
    try {
        const daftar = await ambilProyek();
        pasangFilter(daftar);
        render(daftar);
    } catch (galat) {
        tampilkanGalat("Data gagal dimuat. Periksa alamat atau koneksi.");
        console.error(galat.message);
    } finally {
        aturMemuat(false);
    }
}

muat();
