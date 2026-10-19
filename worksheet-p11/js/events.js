import { aturUlang, pilihKategori, tambahFavorit } from "./state.js";

export function pasangPendengar() {
    const pengalihTema = document.querySelector("#tema");
    const labelTema = document.querySelector(".tombol-tema");
    const terapkanTema = (tema) => {
        const gelap = tema === "dark";
        document.documentElement.dataset.theme = tema;
        pengalihTema.checked = gelap;
        labelTema.textContent = gelap ? "Tema terang" : "Tema gelap";
    };
    terapkanTema(localStorage.getItem("tema") === "dark" ? "dark" : "light");
    pengalihTema.addEventListener("change", () => {
        const tema = pengalihTema.checked ? "dark" : "light";
        localStorage.setItem("tema", tema);
        terapkanTema(tema);
    });

    document.querySelector("#filter").addEventListener("click", (event) => {
        const tombol = event.target.closest("button");
        if (!tombol) return;
        pilihKategori(tombol.dataset.kategori);
    });

    document.querySelector("#daftar").addEventListener("click", (event) => {
        const tombol = event.target.closest(".favorit");
        if (!tombol) return;
        tambahFavorit(Number(tombol.dataset.id));
    });

    document.querySelector("#atur-ulang").addEventListener("click", aturUlang);
}
