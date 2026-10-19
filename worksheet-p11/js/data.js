export const profil = {
    nama: "Rafi Adzkaulhuda Nasution",
    nim: "25523092",
    peran: "Mahasiswa yang sedang belajar pengembangan aplikasi berbasis web",
    keahlian: ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar = []) => daftar.join(" · ");

export function saring(daftar, kategori) {
    return daftar.filter(
        (proyek) => kategori === "semua" || proyek.kategori === kategori
    );
}
