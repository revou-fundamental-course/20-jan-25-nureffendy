// Fungsi untuk menghitung BMI dan menampilkan hasil
function calculateBMI(weight, height) {
    const bmi = (weight / (height * height)).toFixed(2);
    // Setel hasil BMI ke result-box
    document.getElementById("result-box").innerText = bmi;
    
    // Tentukan pesan berdasarkan nilai BMI
    let message = getBMIMessage(bmi);
    // Tampilkan pesan pada elemen dengan id "suggestion"
    document.getElementById("suggestion").innerText = message;
    
    // Tentukan kategori BMI
    let category = getCategory(bmi);
    // Tampilkan kategori BMI
    document.getElementById('category-result').textContent = category;
    
    // Tampilkan hasil pada halaman
    document.querySelector('.result-font').textContent = bmi;

     // Sembunyikan pesan error jika input valid
     document.getElementById('errorMessage').style.display = 'none';
}

// Fungsi untuk menentukan pesan berdasarkan nilai BMI
function getBMIMessage(bmi) {
    let message = "";
    if (bmi < 18.5) {
        message = "Berat badan Anda di bawah normal. Anda mungkin kekurangan berat badan. Untuk mencapai berat badan yang lebih sehat, pertimbangkan untuk meningkatkan asupan kalori dengan makan makanan yang bergizi, seperti sayuran, buah-buahan, protein tanpa lemak, dan biji-bijian. Jangan lupa untuk mengimbangi dengan olahraga ringan untuk meningkatkan massa otot. Saran: Usahakan untuk menjaga pola makan yang lebih teratur.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Berat badan Anda berada dalam kisaran ideal. Selamat! Anda memiliki berat badan yang sehat. Terus jaga pola makan sehat dan olahraga secara teratur. Saran: Tetap konsisten menjaga pola hidup sehat untuk mempertahankan berat badan ideal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        message = "Berat badan Anda termasuk kategori kelebihan berat badan. Pertimbangkan untuk mengatur pola makan dan meningkatkan aktivitas fisik. Saran: Mulailah dengan perubahan kecil, seperti makan lebih banyak sayuran dan memperbanyak aktivitas fisik seperti berjalan kaki atau berlari ringan.";
    } else {
        message = "Berat badan Anda tergolong obesitas. Obesitas dapat menyebabkan berbagai masalah kesehatan serius. Disarankan untuk berkonsultasi dengan dokter atau ahli gizi. Saran: Fokus pada pola makan yang lebih sehat dan rutin berolahraga, serta pertimbangkan untuk mendapatkan dukungan medis.";
    }
    return message;
}

// Fungsi untuk menentukan kategori BMI
function getCategory(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Berat Badan Ideal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Kelebihan Berat Badan";
    } else {
        return "Obesitas";
    }
}

// Event listener untuk tombol Hitung BMI
document.querySelector('.btn-calculate').addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input dari formulir
    const weight = parseFloat(document.getElementById('weight').value); // Berat badan (kg)
    const height = parseFloat(document.getElementById('height').value) / 100; // Tinggi badan (meter)

     // Validasi input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        // Tampilkan pesan error jika input tidak valid
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }


    // Panggil fungsi untuk menghitung BMI dan menampilkan hasil
    calculateBMI(weight, height);
});

// Fungsi Tombol Reset
document.querySelector('.btn-reset').addEventListener('click', function () {
    // Reset hasil BMI dan kategori
    document.querySelector('.result-font').textContent = '00';
    document.getElementById('category-result').textContent = '';
    document.getElementById('suggestion').textContent = '';
    // Sembunyikan pesan error saat reset
    document.getElementById('errorMessage').style.display = 'none';
});
