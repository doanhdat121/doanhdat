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
