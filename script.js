// Lấy các phần tử từ HTML
const openQrBtn = document.getElementById('open-qr-btn');
const closeQrBtn = document.getElementById('close-qr-btn');
const qrModal = document.getElementById('qr-modal');

// Khi nhấn nút "Mã QR"
openQrBtn.addEventListener('click', () => {
    qrModal.classList.add('active');
});

// Khi nhấn nút đóng (dấu X)
closeQrBtn.addEventListener('click', () => {
    qrModal.classList.remove('active');
});

// Đóng modal khi nhấn vào vùng nền mờ bên ngoài
qrModal.addEventListener('click', (event) => {
    // Chỉ đóng nếu người dùng nhấn trực tiếp vào nền mờ (chứ không phải nội dung bên trong)
    if (event.target === qrModal) {
        qrModal.classList.remove('active');
    }
});
