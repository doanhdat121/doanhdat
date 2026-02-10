document.addEventListener('DOMContentLoaded', function() {
    
    // 1. TÍNH NĂNG TÌM KIẾM (SEARCH FILTER)
    const searchInput = document.querySelector('.search-box input');
    const cards = document.querySelectorAll('.video-card'); // Lấy tất cả thẻ bài tập
    
    // Lắng nghe sự kiện khi người dùng gõ phím
    searchInput.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        cards.forEach(card => {
            // Lấy tiêu đề bài lab
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            
            // Kiểm tra: Nếu tiêu đề chứa từ khóa tìm kiếm -> Hiện, ngược lại -> Ẩn
            if(title.includes(searchTerm)) {
                card.style.display = "flex"; // Giữ nguyên kiểu hiển thị flex của thẻ
                // Thêm hiệu ứng hiện ra nhẹ nhàng
                card.style.animation = "fadeIn 0.5s ease";
            } else {
                card.style.display = "none";
            }
        });
    });

    // 2. HIỆU ỨNG NAVBAR KHI CUỘN TRANG (SCROLL EFFECT)
    const navbar = document.querySelector('.yt-navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled'); // Thêm class làm đậm nền khi cuộn xuống
        } else {
            navbar.classList.remove('scrolled'); // Trở về trong suốt khi ở đầu trang
        }
    });

    // 3. HIỆU ỨNG NÚT MENU (Hamburger)
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', function() {
        alert("Tính năng Menu đang được cập nhật!"); 
        // Sau này bạn có thể code thêm code để mở sidebar tại đây
    });

    // Thêm keyframes cho hiệu ứng hiện bài tập
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});



// ... (Code cũ của bạn ở trên) ...

    // 4. HIỆU ỨNG SÓNG NƯỚC KHI CLICK CHUỘT (RIPPLE EFFECT)
    document.addEventListener('click', function(e) {
        // Tạo thẻ div làm sóng
        const ripple = document.createElement('div');
        ripple.classList.add('click-ripple');

        // Đặt vị trí sóng ngay tại chỗ chuột click
        ripple.style.left = e.pageX + 'px';
        ripple.style.top = e.pageY + 'px';

        // Thêm vào trang
        document.body.appendChild(ripple);

        // Xóa thẻ div sau khi chạy xong hiệu ứng (0.6s) để nhẹ web
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
// ... Code cũ ...

// 5. HÀM BẬT/TẮT NHẠC NỀN (GIỮ NGUYÊN ẢNH)
// Biến kiểm tra trạng thái nhạc (Đặt ở ngoài hàm)
// Biến toàn cục để nhớ trạng thái
let isPlaying = false; 

function toggleChillMusic(element) {
    const playerContainer = document.getElementById('hidden-player');
    const videoId = "TUYYwb8b0zs";
    
    if (isPlaying == false) {
        // --- BẬT NHẠC ---
        // Chèn video vào div ẩn -> Nhạc tự phát lên
        playerContainer.innerHTML = `
            <iframe width="100" height="100" 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}" 
                title="Music Player" 
                frameborder="0" 
                allow="autoplay">
            </iframe>
        `;
        
        isPlaying = true;
        
        // (Tùy chọn) Có thể console.log để bạn biết là code đã chạy
        console.log("Đang phát nhạc ngầm...");
        
    } else {
        // --- TẮT NHẠC ---
        // Xóa sạch iframe -> Nhạc tắt
        playerContainer.innerHTML = "";
        
        isPlaying = false;
        console.log("Đã tắt nhạc.");
    }
}
// ... (Code cũ của bạn ở trên) ...
// ... (Code cũ ở trên giữ nguyên) ...

/* =========================================
   6. TÍNH NĂNG DARK MODE & ĐỔI LOGO
   ========================================= */
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const logoImg = document.querySelector('.logo-icon'); // Lấy thẻ ảnh logo

// CẤU HÌNH TÊN FILE LOGO Ở ĐÂY
const lightLogo = 'logominiden.webp';  // Logo giao diện sáng
const darkLogo = 'logominitrang.png'; // THAY TÊN FILE LOGO DARK MODE CỦA BẠN VÀO ĐÂY

// Hàm đổi logo dựa trên trạng thái
function updateLogo(isDark) {
    if (isDark) {
        logoImg.src = darkLogo;
    } else {
        logoImg.src = lightLogo;
    }
}

// 1. Kiểm tra trạng thái đã lưu khi mới vào web
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
    updateLogo(true); // Đổi sang logo tối ngay lập tức
}

// 2. Xử lý sự kiện click nút
themeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Kiểm tra class để biết đang ở chế độ nào
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
        updateLogo(true); // Chuyển sang logo Dark Mode
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
        updateLogo(false); // Quay về logo gốc
    }
});
