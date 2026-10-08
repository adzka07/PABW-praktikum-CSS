// Data halaman disimpan di JavaScript agar mudah digunakan kembali.
const profil = {
    nama: "Rafi Adzkaulhuda Nasution",
    nim: "25523092",
    peran: "Mahasiswa yang sedang belajar pengembangan aplikasi berbasis web",
    keahlian: ["HTML", "CSS", "JavaScript"],
};

const daftarProyek = [
    {
        judul: "Halaman daftar tugas kuliah",
        teknologi: "HTML dan CSS",
        tahun: 2026,
        selesai: true,
    },
    {
        judul: "Pengembangan halaman dengan JavaScript",
        teknologi: "JavaScript ES6+",
        tahun: 2026,
        selesai: false,
    },
];

// Fungsi murni: hasil hanya bergantung pada argumen yang diterima.
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

// Fungsi murni: mengubah array keahlian menjadi satu baris teks.
const formatKeahlian = (daftar = []) => daftar.join(" · ");

const jumlahProyek = daftarProyek.length;
let pilihanAktif = "semua";

console.log(buatPerkenalan(profil));
console.log(`Keahlian: ${formatKeahlian(profil.keahlian)}`);
console.log(`Jumlah proyek: ${jumlahProyek}`);
console.log(`Pilihan aktif: ${pilihanAktif}`);

// Array methods yang diminta pada worksheet.
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
const proyekJavaScript = daftarProyek.find((proyek) =>
    proyek.teknologi.includes("JavaScript")
);

console.table(profil.keahlian);
console.table(daftarProyek);
console.table(proyekSelesai);
console.log("Judul proyek:", judulProyek);
console.log("Proyek JavaScript pertama:", proyekJavaScript);

// Salinan diurutkan tanpa mengubah data asli.
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
