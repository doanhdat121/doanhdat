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
let isPlaying = false; 

function toggleChillMusic(element) {
    const playerContainer = document.getElementById('hidden-player');
    const videoId = "TUYYwb8b0zs"; // Bài hát: Tháng Năm - Soobin
    
    // Thử tìm icon và text (Nếu bạn đã xóa bên HTML thì nó sẽ là null)
    const icon = document.getElementById('music-icon');
    const text = document.getElementById('music-text');

    if (isPlaying == false) {
        // --- TRƯỜNG HỢP 1: BẬT NHẠC ---
        
        // Chèn Video vào
        playerContainer.innerHTML = `
            <iframe width="100%" height="100%" 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}" 
                title="Music Player" 
                frameborder="0" 
                allow="autoplay"
                style="border-radius: 12px;">
            </iframe>
        `;
        
        // Hiện khung video lên
        playerContainer.style.opacity = "1";
        playerContainer.style.pointerEvents = "auto";

        // KIỂM TRA: Nếu còn nút icon thì mới đổi màu (tránh bị lỗi)
        if (icon) {
            icon.innerHTML = "⏸"; 
            icon.style.color = "#00ff00";
        }
        if (text) {
            text.innerHTML = "Đang Chill... (Bấm để tắt)";
        }
        
        isPlaying = true;
        
    } else {
        // --- TRƯỜNG HỢP 2: TẮT NHẠC ---
        
        // Xóa sạch video
        playerContainer.innerHTML = "";
        
        // Ẩn khung video đi
        playerContainer.style.opacity = "0";
        playerContainer.style.pointerEvents = "none";
        
        // Trả lại icon cũ (nếu còn)
        if (icon) {
            icon.innerHTML = "▶";
            icon.style.color = "white";
        }
        if (text) {
            text.innerHTML = "Bấm để Chill Nhạc Lofi";
        }
        
        isPlaying = false; 
    }
}
