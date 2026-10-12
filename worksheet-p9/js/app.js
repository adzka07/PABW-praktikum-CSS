// Data halaman disimpan di JavaScript agar mudah digunakan kembali.
const profil = {
    nama: "Rafi Adzkaulhuda Nasution",
    nim: "25523092",
    peran: "Mahasiswa yang sedang belajar pengembangan aplikasi berbasis web",
    keahlian: ["HTML", "CSS", "JavaScript"],
};

export const daftarProyek = [
    {
        judul: "Worksheet DOM dan Interaktivitas",
        mataKuliah: "PABW",
        tenggat: "12 Oktober 2026",
        selesai: true,
        prioritas: "Tinggi",
        kategori: "pabw",
    },
    {
        judul: "Analisis Manajemen Proyek Teknologi Informasi",
        mataKuliah: "MPTI",
        tenggat: "15 Oktober 2026",
        selesai: false,
        prioritas: "Tinggi",
        kategori: "mpti",
    },
    {
        judul: "Laporan Keamanan Jaringan",
        mataKuliah: "SJK",
        tenggat: "18 Oktober 2026",
        selesai: false,
        prioritas: "Sedang",
        kategori: "sjk",
    },
    {
        judul: "Perancangan Sistem Digital",
        mataKuliah: "FSD",
        tenggat: "21 Oktober 2026",
        selesai: false,
        prioritas: "Sedang",
        kategori: "fsd",
    },
    {
        judul: "Refleksi Pendidikan Kewarganegaraan",
        mataKuliah: "PKN",
        tenggat: "24 Oktober 2026",
        selesai: false,
        prioritas: "Rendah",
        kategori: "pkn",
    },
    {
        judul: "Implementasi Event pada Halaman Web",
        mataKuliah: "PABW",
        tenggat: "26 Oktober 2026",
        selesai: false,
        prioritas: "Tinggi",
        kategori: "pabw",
    },
    {
        judul: "Dokumen Rencana Pengembangan Sistem",
        mataKuliah: "MPTI",
        tenggat: "28 Oktober 2026",
        selesai: false,
        prioritas: "Sedang",
        kategori: "mpti",
    },
    {
        judul: "Simulasi Keamanan Akses Jaringan",
        mataKuliah: "SJK",
        tenggat: "30 Oktober 2026",
        selesai: false,
        prioritas: "Sedang",
        kategori: "sjk",
    },
    {
        judul: "Evaluasi Struktur Data Aplikasi",
        mataKuliah: "FSD",
        tenggat: "2 November 2026",
        selesai: false,
        prioritas: "Rendah",
        kategori: "fsd",
    },
    {
        judul: "Makalah Hak dan Kewajiban Warga Negara",
        mataKuliah: "PKN",
        tenggat: "4 November 2026",
        selesai: false,
        prioritas: "Rendah",
        kategori: "pkn",
    },
];

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar = []) => daftar.join(" · ");

const jumlahProyek = daftarProyek.length;
let pilihanAktif = "semua";

console.log(buatPerkenalan(profil));
console.log(`Keahlian: ${formatKeahlian(profil.keahlian)}`);
console.log(`Jumlah proyek: ${jumlahProyek}`);
console.log(`Pilihan aktif: ${pilihanAktif}`);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
const proyekJavaScript = daftarProyek.find((proyek) =>
    proyek.mataKuliah === "PABW"
);

console.table(profil.keahlian);
console.table(daftarProyek);
console.table(proyekSelesai);
console.log("Judul proyek:", judulProyek);
console.log("Proyek JavaScript pertama:", proyekJavaScript);

const proyekTerurut = [...daftarProyek].sort((a, b) =>
    a.judul.localeCompare(b.judul)
);
console.table(proyekTerurut);

// Pengalih tema terang/gelap.
const pengalihTema = document.querySelector("#tema");
const labelTema = document.querySelector(".tombol-tema");
const temaTersimpan = localStorage.getItem("tema");

function terapkanTema(tema) {
    const gelap = tema === "dark";
    document.documentElement.dataset.theme = tema;
    pengalihTema.checked = gelap;
    labelTema.textContent = gelap ? "Tema terang" : "Tema gelap";
    labelTema.setAttribute(
        "aria-label",
        gelap ? "Ganti ke tema terang" : "Ganti ke tema gelap"
    );
}

terapkanTema(temaTersimpan === "dark" ? "dark" : "light");

pengalihTema.addEventListener("change", () => {
    const temaBerikutnya = pengalihTema.checked ? "dark" : "light";
    localStorage.setItem("tema", temaBerikutnya);
    terapkanTema(temaBerikutnya);
});
