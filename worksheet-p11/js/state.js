import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
    daftarProyek: [],
    kategoriAktif: "semua",
    favorit: [],
};

export function simpan() {
    const isi = {
        versi: VERSI,
        kategoriAktif: state.kategoriAktif,
        favorit: state.favorit,
    };
    localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
    try {
        const isi = JSON.parse(localStorage.getItem(KUNCI));
        if (!isi || isi.versi !== VERSI || !Array.isArray(isi.favorit)) {
            localStorage.removeItem(KUNCI);
            return null;
        }
        return isi;
    } catch {
        localStorage.removeItem(KUNCI);
        return null;
    }
}

export function pulihkan(isi) {
    if (!isi) return;
    state.kategoriAktif = typeof isi.kategoriAktif === "string" ? isi.kategoriAktif : "semua";
    state.favorit = isi.favorit.map(Number).filter(Number.isFinite);
}

export function isiProyek(daftar) {
    state.daftarProyek = daftar;
    render(state);
}

export function pilihKategori(nilai) {
    state.kategoriAktif = nilai;
    simpan();
    render(state);
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) return;
    state.favorit = [...state.favorit, id];
    simpan();
    render(state);
}

export function aturUlang() {
    localStorage.removeItem(KUNCI);
    state.kategoriAktif = "semua";
    state.favorit = [];
    render(state);
}
