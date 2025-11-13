/**
 * ============================================
 * CẤU HÌNH THIỆP CƯỚI ONLINE
 * ============================================
 * Điền đầy đủ thông tin vào file này
 * Sau đó chạy lệnh: node update-wedding.js
 * hoặc copy thông tin vào các file tương ứng
 */

const weddingConfig = {
    // ==========================================
    // THÔNG TIN CẶP ĐÔI
    // ==========================================
    couple: {
        groom: {
            fullName: "Nguyễn Anh Tú",           // Tên đầy đủ chú rể
            firstName: "Anh Tú",                 // Tên gọi ngắn
            phone: "0901234567",                 // Số điện thoại (tùy chọn)
            facebook: "",                        // Link Facebook (tùy chọn)
            instagram: "",                       // Link Instagram (tùy chọn)
        },
        bride: {
            fullName: "Trần Diệu Nhi",          // Tên đầy đủ cô dâu
            firstName: "Diệu Nhi",               // Tên gọi ngắn
            phone: "0907654321",                 // Số điện thoại (tùy chọn)
            facebook: "",                        // Link Facebook (tùy chọn)
            instagram: "",                       // Link Instagram (tùy chọn)
        }
    },

    // ==========================================
    // THÔNG TIN PHỤ HUYNH
    // ==========================================
    parents: {
        groom: {
            father: "Ông Cấn Văn An",           // Tên bố chú rể
            mother: "Bà Nguyễn Thị Hải",        // Tên mẹ chú rể
            address: "Quận 8, TP. Hồ Chí Minh" // Địa chỉ nhà trai
        },
        bride: {
            father: "Ông [Tên Bố]",             // Tên bố cô dâu - THAY ĐỔI
            mother: "Bà [Tên Mẹ]",              // Tên mẹ cô dâu - THAY ĐỔI
            address: "Quận 8, TP. Hồ Chí Minh" // Địa chỉ nhà gái - THAY ĐỔI
        }
    },

    // ==========================================
    // THÔNG TIN NGÀY CƯỚI
    // ==========================================
    wedding: {
        date: "2025-11-30",                     // Định dạng: YYYY-MM-DD
        time: "10:00",                          // Giờ tổ chức (24h format)
        dayOfWeek: "Thứ Sáu",                   // Thứ trong tuần
        lunarDate: "Ngày 02 Tháng 03 Năm Ất Tỵ", // Âm lịch
        
        // Hiển thị đẹp
        displayDate: {
            day: "30",
            month: "03",
            year: "2025",
            monthText: "Tháng 03"
        }
    },

    // ==========================================
    // ĐỊA ĐIỂM TỔ CHỨC
    // ==========================================
    venue: {
        name: "The ADORA Center",               // Tên địa điểm
        address: "xxx, Phường xxx",             // Địa chỉ chi tiết - THAY ĐỔI
        district: "Quận xxx",                   // Quận/Huyện - THAY ĐỔI
        city: "TP. Hồ Chí Minh",               // Thành phố
        
        // Link Google Maps
        googleMapsUrl: "https://maps.app.goo.gl/PP57rDnyXbgNEVbM8",
        
        // Embed Google Maps (lấy từ Google Maps > Share > Embed)
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7176.46950918691!2d106.6573604!3d10.7965823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d96e56d9bd%3A0x205428f74d7f4ddb!2sThe%20ADORA%20Center!5e1!3m2!1svi!2s!4v1739789062931!5m2!1svi!2s"
    },

    // ==========================================
    // HÌNH ẢNH (CDN URLs hoặc Google Drive)
    // ==========================================
    images: {
        // Album ảnh cưới (6 ảnh)
        gallery: [
            "https://content.pancake.vn/1/s526x789/fwebp/1f/ec/67/de/9e0ddf95bd1e8508eb6f0177f5ef50605c83a3a9833c96b0e66ad619-w:1080-h:1620-l:309623-t:image/jpeg.jpg",
            "https://content.pancake.vn/1/s527x791/fwebp/4e/3a/ee/02/dc987c839e2d2b41608056aca76c61f8069679c0fdf6b585b28e0267-w:1080-h:1620-l:290935-t:image/jpeg.jpg",
            "https://content.pancake.vn/web-media/10/8a/c7/a3/4469b23a30640d824081431e33cfd219c78e0717425798aed85f1535-w:1080-h:1440-l:167192-t:image/jpeg.jpg",
            "https://content.pancake.vn/web-media/ba/87/8e/98/5b47f056d251a6b8bb4861fe26e96bff44e06e4543af717b5d2d8b23-w:1080-h:1440-l:133756-t:image/jpeg.jpg",
            "https://content.pancake.vn/web-media/df/28/0d/67/a2aecb446deb980a1709b1c3f2828a03a43952e40b2c5b76a57641cf-w:1080-h:1440-l:125280-t:image/jpeg.jpg",
            "https://content.pancake.vn/1/s527x791/fwebp/46/45/b6/42/7ebe591a302e052c877665786914eac1192398f4f8181152f26761fd-w:1080-h:1620-l:360585-t:image/jpeg.jpg"
        ],
        
        // QR Code chuyển khoản
        qrCode: "images/qr-code.png"  // THAY ĐỔI: Link Google Drive hoặc đường dẫn local
    },

    // ==========================================
    // NHẠC NỀN
    // ==========================================
    music: {
        // TÙY CHỌN 1: File MP3 local
        localFile: "",
        
        // TÙY CHỌN 2: Link YouTube
        youtubeUrl: "https://www.youtube.com/watch?v=_8ldAdQd9WU&list=RD_8ldAdQd9WU&start_radio=1",  // THAY ĐỔI: Ví dụ: "https://www.youtube.com/watch?v=xxxxx"
        
        // TÙY CHỌN 3: Link MP3 trực tiếp
        directUrl: ""    // THAY ĐỔI: Link MP3 từ Google Drive hoặc hosting khác
    },

    // ==========================================
    // THÔNG TIN NGÂN HÀNG (Mừng cưới)
    // ==========================================
    banking: {
        bank: {
            name: "MB Bank",                    // Tên ngân hàng
            shortName: "MBBank",                // Tên viết tắt
            logo: "🏦"                          // Icon/Emoji
        },
        account: {
            name: "NGUYEN ANH TU",              // Tên chủ tài khoản (IN HOA)
            number: "8838683860",               // Số tài khoản
            branch: ""                          // Chi nhánh (tùy chọn)
        }
    },

    // ==========================================
    // MẠNG XÃ HỘI
    // ==========================================
    social: {
        facebook: "",      // Link Facebook của cặp đôi
        instagram: "",     // Link Instagram
        zalo: "",          // Link Zalo
        tiktok: ""         // Link TikTok (tùy chọn)
    },

    // ==========================================
    // CÀI ĐẶT KHÁC
    // ==========================================
    settings: {
        rsvpDeadline: "20/03/2025",            // Hạn xác nhận tham dự
        maxGuests: 10,                         // Số khách tối đa mỗi người mời
        showCountdown: true,                   // Hiển thị đếm ngược
        showGallery: true,                     // Hiển thị album ảnh
        showRSVP: true,                        // Hiển thị form xác nhận
        showBanking: true,                     // Hiển thị thông tin chuyển khoản
        autoPlayMusic: false,                  // Tự động phát nhạc (false = yêu cầu click)
        
        // Màu chủ đạo (tùy chỉnh trong CSS)
        theme: {
            primaryColor: "#c41e3a",           // Màu đỏ chủ đạo
            secondaryColor: "#fff5f5",         // Màu hồng nhạt
            accentColor: "#8b0000"             // Màu đỏ đậm
        }
    },

    // ==========================================
    // METADATA (SEO)
    // ==========================================
    meta: {
        title: "Thiệp Cưới - Anh Tú & Diệu Nhi",
        description: "Thiệp cưới online của Anh Tú & Diệu Nhi - 30.03.2025",
        keywords: "thiệp cưới, wedding invitation, Anh Tú, Diệu Nhi",
        author: "Long Thịnh Wedding"
    }
};

// ============================================
// XUẤT CẤU HÌNH
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = weddingConfig;
}

// ============================================
// HƯỚNG DẪN SỬ DỤNG
// ============================================
/*

📝 CÁCH SỬ DỤNG FILE CONFIG:

1. ĐIỀN THÔNG TIN:
   - Thay đổi các thông tin đánh dấu "THAY ĐỔI"
   - Điền đầy đủ thông tin cặp đôi, phụ huynh, địa điểm

2. HÌNH ẢNH:
   - Thay link trong mảng gallery[] bằng link Google Drive
   - Format Google Drive: https://drive.google.com/uc?export=view&id=FILE_ID
   - Hoặc dùng link CDN như hiện tại

3. NHẠC NỀN:
   - CÁCH 1: Upload file MP3 vào folder audio/
   - CÁCH 2: Dùng link YouTube (cần code thêm YouTube Player)
   - CÁCH 3: Dùng link MP3 trực tiếp

4. QR CODE:
   - Tạo QR code ngân hàng tại: https://qr.sepay.vn/
   - Upload lên Google Drive hoặc folder images/
   - Cập nhật link vào config.images.qrCode

5. CẬP NHẬT VÀO WEBSITE:
   - CÁCH 1 (Thủ công): Copy từng thông tin vào index.html
   - CÁCH 2 (Tự động): Chạy: node update-wedding.js
   - CÁCH 3 (Nâng cao): Dùng JavaScript đọc config động

==============================================

🔗 HƯỚNG DẪN LẤY LINK GOOGLE DRIVE:

1. Upload ảnh lên Google Drive
2. Click chuột phải > Get link > Change to "Anyone with the link"
3. Copy link, có dạng: https://drive.google.com/file/d/1ABC...XYZ/view
4. Lấy phần ID (giữa /d/ và /view)
5. Tạo link mới: https://drive.google.com/uc?export=view&id=ID_CỦA_BẠN

Ví dụ:
- Link gốc: https://drive.google.com/file/d/1A2B3C4D5/view
- Link dùng: https://drive.google.com/uc?export=view&id=1A2B3C4D5

==============================================

🎵 HƯỚNG DẪN THÊM NHẠC YOUTUBE:

1. Lấy Video ID từ YouTube
   - Link: https://www.youtube.com/watch?v=dQw4w9WgXcQ
   - Video ID: dQw4w9WgXcQ

2. Cập nhật vào config.music.youtubeUrl

3. Sửa code trong js/main.js để dùng YouTube Player API

==============================================

📞 HỖ TRỢ:
- Email: support@longthinhwedding.com
- Website: https://www.longthinhwedding.site

*/
