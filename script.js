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
/* =========================================
   7. TÍCH HỢP ĐỒNG HỒ TỪ LAB 9
   ========================================= */

// Hàm khởi chạy (Bọc lại để đảm bảo web tải xong mới chạy)
function initLab9Clock() {
    const canvas = document.getElementById("canvas");
    if(!canvas) return; // Nếu không tìm thấy canvas thì dừng

    const ctx = canvas.getContext("2d");
    let radius = canvas.height / 2;
    
    // Dời tâm về giữa
    ctx.translate(radius, radius);
    radius = radius * 0.90;

    // Chạy đồng hồ mỗi giây
    setInterval(() => {
        drawClock(ctx, radius);
        updateGreeting(); // Hàm này thêm mới để đổi lời chào
    }, 1000);
}

// --- LOGIC VẼ CỦA BẠN (GIỮ NGUYÊN TỪ LAB 9) ---
function drawClock(ctx, radius) {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    // Sửa nhẹ chỗ màu sắc để tương thích Dark Mode
    const isDark = document.body.classList.contains('dark-mode');
    
    // Nếu Darkmode thì dùng màu tối, không thì dùng màu trắng như cũ
    const bgColor = isDark ? '#333' : 'white'; 
    const rimColor = isDark ? '#555' : '#333';

    const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, rimColor);
    grad.addColorStop(0.5, bgColor);
    grad.addColorStop(1, rimColor);
    
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = bgColor; // Đã sửa để ăn theo darkmode
    ctx.fill();
    
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = rimColor;
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    const isDark = document.body.classList.contains('dark-mode');
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = isDark ? '#fff' : '#000'; // Số màu trắng nếu nền đen
    
    for (let num = 1; num < 13; num++) {
        let ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    // Màu kim (Trắng nếu dark mode, đen nếu thường)
    const handColor = document.body.classList.contains('dark-mode') ? '#fff' : '#000';

    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
           (minute * Math.PI / (6 * 60)) +
           (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07, handColor);
    
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.07, handColor);
    
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02, "red"); // Kim giây giữ màu đỏ
}

function drawHand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color; // Thêm tham số màu
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
// --- HÀM 1: XỬ LÝ LỜI CHÀO & NGÀY THÁNG ---
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const greetingText = document.getElementById("greeting-text");
    const dateText = document.getElementById("current-date");
    
    let message = "";
    if (hour >= 0 && hour < 6) message = "Chúc ngày mới tốt lành 🌌";
    else if (hour >= 6 && hour < 11) message = "Chào buổi sáng ☀️";
    else if (hour >= 11 && hour < 14) message = "Chào buổi trưa 🍚";
    else if (hour >= 14 && hour < 18) message = "Chào buổi chiều 🍵";
    else if (hour >= 18 && hour < 22) message = "Chào buổi tối 🌙";
    else message = "Ngủ thôi, deadline mai tính 😴";

    if (greetingText) greetingText.innerText = message;
    
    if (dateText) {
        dateText.innerText = now.toLocaleDateString('vi-VN', { 
            weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' 
        });
    }
}

// --- HÀM 2: TÍNH SỐ NGÀY THỨ 2 CÒN LẠI ---
function updateMondayCountdown() {
    const countEL = document.getElementById("monday-count");
    if (!countEL) return;

    // Ngày mục tiêu
    const targetDate = new Date("2027-02-06T00:00:00");
    let currentDate = new Date();

    // Đưa thời gian về 0h 
    currentDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    let mondayCount = 0;
    let tempDate = new Date(currentDate);
    
    // Bắt đầu đếm từ ngày mai
    tempDate.setDate(tempDate.getDate() + 1);

    while (tempDate <= targetDate) {
        if (tempDate.getDay() === 1) { // 1 là Thứ Hai
            mondayCount++;
        }
        tempDate.setDate(tempDate.getDate() + 1);
    }

    
    countEL.innerText = mondayCount;
}

// --- KHỞI TẠO KHI TRANG TẢI XONG ---
document.addEventListener('DOMContentLoaded', function() {
    // 1. Kích hoạt đồng hồ Lab 9 (Hàm này cũng sẽ tự động chạy updateGreeting mỗi giây)
    initLab9Clock();

    // 2. Tính ngay số ngày thứ 2 lúc vừa vào web
    updateMondayCountdown();

    // 3. Cho bộ đếm thứ 2 tự động cập nhật lại mỗi giờ (3600000 ms)
    setInterval(updateMondayCountdown, 3600000);
});


/* =========================================
   8. TÍNH NĂNG ĐA NGÔN NGỮ (DỊCH, ẢNH, ÂM THANH)
   ========================================= */
// 1. Tạo từ điển dịch thuật
const translations = {
    "vi": {
        "labs_title": "📂 Các bài lab",
        "homework_title": "🏠 Bài tập về nhà",
        "subscribe": "ĐĂNG KÝ",
        "search_ph": "Tìm kiếm bài tập...",
        "student_info": "MSSV: 2410277 • Lớp: THK48SP",
        "sub_info": "Thiết kế web",
        "endnote": "Trang web này có sự hỗ trợ của AI"
    },
    "ko": {
        "labs_title": "📂 랩 과제",
        "homework_title": "🏠 숙제",
        "subscribe": "구독",             
        "search_ph": "과제 검색...",       
        "student_info": "학번: 2410277 • 반: THK48SP",
        "sub_info": "웹 디자인",
        "endnote": "이 웹사이트는 AI의 지원을 받습니다"
    },
    "zh": {
        "labs_title": "📂 实验作业",
        "homework_title": "🏠 家庭作业",
        "subscribe": "订阅",
        "search_ph": "搜索作业...",      
        "student_info": "学号: 2410277 • 班级: THK48SP",
        "sub_info": "网页设计",
        "endnote": "本网站由AI提供支持"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const langSwitch = document.getElementById('lang-switch');
    const bannerImg = document.querySelector('.banner-img');
    const searchInput = document.querySelector('.search-box input');
    // Thêm dòng này để lấy thẻ ảnh của hộp phát nhạc
    const musicBannerImg = document.querySelector('.music-banner-right img');
    // Lắng nghe sự kiện khi chọn ngôn ngữ khác
    langSwitch.addEventListener('change', function(e) {
        const selectedLang = e.target.value;

        // 1. PHÁT ÂM THANH
        // Dừng tất cả âm thanh đang phát trước khi phát cái mới
        document.querySelectorAll('audio').forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        const soundToPlay = document.getElementById(`audio-${selectedLang}`);
        if(soundToPlay) {
            soundToPlay.play();
        }

        // 2. ĐỔI ẢNH BANNER
        // Đảm bảo bạn đã lưu ảnh tên: banner-vi.webp, banner-ko.webp...
        if(bannerImg) {
            bannerImg.src = `banner-${selectedLang}.webp`;
        }
       // 2.1 ĐỔI ẢNH MUSIC BANNER (MỚI THÊM)
        if(musicBannerImg) {
            // Thay đuôi .webp thành .png hoặc .jpg nếu ảnh của bạn lưu định dạng khác nhé
            musicBannerImg.src = `music-${selectedLang}.webp`; 
        }
        // 3. DỊCH VĂN BẢN (Quét toàn bộ thẻ có data-i18n)
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            // Nếu từ điển có từ khóa này thì thay thế
            if (translations[selectedLang][key]) {
                el.innerText = translations[selectedLang][key];
            }
        });

        // 4. DỊCH RIÊNG Ô TÌM KIẾM (Placeholder)
        if (searchInput && translations[selectedLang]["search_ph"]) {
            searchInput.placeholder = translations[selectedLang]["search_ph"];
        }
    });
});
