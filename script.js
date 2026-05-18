/**
 * E-Portfolio Interactive Script
 * Mengatur navigasi tab, sub-menu, dan modal
 */

// 1. Fungsi Utama Navigasi Menu Utama (Home, Profil, Artefak, Guru)
function showSection(sectionId, element) {
    // Hapus kelas 'active' dari semua menu
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Hapus kelas 'active' dari semua tombol nav
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');
    
    // Tambahkan kelas 'active' pada tombol yang diklik
    element.classList.add('active');
}

// Fungsi alternatif (jika menggunakan group/dropdown di navbar)
function openGroup(groupId, element) {
    showSection(groupId, element);
}

// 2. Fungsi Sub Menu Artefak (Modul Ajar, Penilaian, Lampiran, Dokumentasi)
function openArtefak(artefakId, element) {
    // Hapus kelas show-content dari semua konten artefak
    const contents = document.querySelectorAll('.artefak-content');
    contents.forEach(content => {
        content.classList.remove('show-content');
    });

    // Hapus kelas artefak-active dari semua tombol
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('artefak-active');
    });

    // Tampilkan konten yang dipilih
    document.getElementById(artefakId).classList.add('show-content');
    
    // Tambahkan kelas aktif pada tombol
    element.classList.add('artefak-active');
}

// 3. Fungsi Modal (Pop-Up Detail)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex'; // Menggunakan flex agar child (content) berada di tengah
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Tutup modal jika mengklik area di luar konten modal
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// 4. Fungsi Smooth Scroll (Opsional - Membuat scroll lebih halus saat klik menu)
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function() {
        // Jika di mobile (jika navbar punya hamburger), tutup menu
        // (Logika tambahan bisa ditambahkan di sini)
    });
});