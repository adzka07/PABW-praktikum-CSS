// Sumber akhir P10: file JSON yang sudah dipush ke repositori publik.
const ALAMAT =
  "https://raw.githubusercontent.com/adzka07/PABW-praktikum-CSS/main/worksheet-p10/data/proyek.json";

export async function ambilProyek() {
    const respons = await fetch(ALAMAT);
    console.log("status", respons.status, "ok", respons.ok);
    if (!respons.ok) {
        throw new Error(`Status ${respons.status}`);
    }
    return respons.json();
}