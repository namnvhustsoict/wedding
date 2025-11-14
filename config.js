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
            fullName: "Nguyễn Văn Công",           // Tên đầy đủ chú rể
            firstName: "Văn Công",                 // Tên gọi ngắn
            phone: "0999999999",                 // Số điện thoại (tùy chọn)
            facebook: "",                        // Link Facebook (tùy chọn)
            instagram: "",                       // Link Instagram (tùy chọn)
        },
        bride: {
            fullName: "Nguyễn Thị Thơ",          // Tên đầy đủ cô dâu
            firstName: "Anh Thơ",               // Tên gọi ngắn
            phone: "0888888888",                 // Số điện thoại (tùy chọn)
            facebook: "",                        // Link Facebook (tùy chọn)
            instagram: "",                       // Link Instagram (tùy chọn)
        }
    },

    // ==========================================
    // THÔNG TIN PHỤ HUYNH
    // ==========================================
    parents: {
        groom: {
            father: "Ông Nguyễn Văn Chiến",           // Tên bố chú rể
            mother: "Bà Nguyễn Thị Thảo",        // Tên mẹ chú rể
            address: "Tư Thế, Trí Quả, Thuận Thành, Bắc Ninh" // Địa chỉ nhà trai
        },
        bride: {
            father: "Ông [Tên Bố]",             // Tên bố cô dâu - THAY ĐỔI
            mother: "Bà [Tên Mẹ]",              // Tên mẹ cô dâu - THAY ĐỔI
            address: "Thuận Thành, Bắc Ninh" // Địa chỉ nhà gái - THAY ĐỔI
        }
    },

    // ==========================================
    // THÔNG TIN NGÀY CƯỚI
    // ==========================================
    wedding: {
        date: "2025-11-30",                     // Định dạng: YYYY-MM-DD
        time: "10:00",                          // Giờ tổ chức (24h format)
        dayOfWeek: "Thứ Sáu",                   // Thứ trong tuần
        lunarDate: "ngày 11 tháng 10 âm lịch năm Ất Tỵ", // Âm lịch
        
        // Hiển thị đẹp
        displayDate: {
            day: "30",
            month: "11",
            year: "2025",
            monthText: "Tháng 11"
        }
    },

    // ==========================================
    // ĐỊA ĐIỂM TỔ CHỨC
    // ==========================================
    venue: {
        name: "Nhà Trai",               // Tên địa điểm
        address: "Trí Quả",             // Địa chỉ chi tiết - THAY ĐỔI
        district: "Thuận Thành",                   // Quận/Huyện - THAY ĐỔI
        city: "Bắc Ninh",               // Thành phố
        
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
            "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/536017533_1426654165109138_5348434077487708060_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_ivk4iiHmYEQ7kNvwFP-AQI&_nc_oc=AdmPDuJe5go6fZ6IcsEthlqguJAj5Z-h7rT-uFTTu9i00blhc4Py7l2etZPQyWqIxwo&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=QH2y7mTTn6a9pv0CegqTfA&oh=00_AfgvDJrBz2_6-6_7zL_1G0OlYKaVXRtPWufx3hLqFfxxIw&oe=691C5A94",
            "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/502464975_1365186551255900_1540551525817462141_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Jwo5feZ-rQ4Q7kNvwE42W7Y&_nc_oc=Adml8JuvhD9WQVihbVSWULwoWPvjUqoGAe94MzFBompm_Ipl4IVj8HgdUUf900rviv0&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=DepsHSpU4rTXvBHBSoARHA&oh=00_AfiGVdyL73PqkMMrWfhaeOGfLHHf8RK__nnS5aoDFbptUA&oe=691C6AD4",
            "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/474638110_1269971004110789_900025286644472451_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=OO3o1-ZA8tEQ7kNvwFEybuu&_nc_oc=AdlAnugMPVKIXERAM2WZrCiaeHrAsnhbbALIkAryv06G3133HLbuEeGy6jaQpD9CGTQ&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=IYDGshYVVxrAYhBjx3TLyA&oh=00_Afirx2QATeVNq0MIOkZLuViNWgc-hVpS6XpMuLe4Ac2xAA&oe=691C8966",
            "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/535444558_1426640861777135_1969937819720632967_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ITQ-4M6uuccQ7kNvwEpSMIj&_nc_oc=AdnMW3n4q8VfAPmieWlSXFcyykRKepX_s658NMgl3rj-209pU5x6hlu1gto5fuCJH9U&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=tkqq0Ds6Y7cS9GQ9Zm0VBQ&oh=00_AficWVvLjD-gfEj9ybJyNn5RJt6f-5ESEsX8-MLwAcdLiw&oe=691C6B11",
            "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/474951702_1274414336999789_2347112341036801397_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UTDbBgHtlckQ7kNvwHk9os1&_nc_oc=Adl2-1xOfoU_0iroRrPcEprYyk_79E-dvo8FSz95CJL2GEzYkqEp443AdDbBMTI1c84&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=TKxw_3mkDDV9kytWvTB1Jw&oh=00_AfgQz-Ixu9y-GnKyQd7LN0GBUnrNpFgp_D653GZ9Hv81xA&oe=691C9283",
            "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/490475738_3123255487831363_1985552547453458815_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LXFiYuXAgN8Q7kNvwHvrs1h&_nc_oc=Adkf9SVBxe28s-273I1O4qVHGqTnQOkP9U39Qp7znj0nAfv7v7uvg_uLKw-Q19zU8tI&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=2OJl8DA7T8wTv2V15u3G7A&oh=00_AfgcFJzjh61PJQYG0X-qBSvqBrNoRsoVA_Vt8NmoVyqrSw&oe=691C81C5"
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
        rsvpDeadline: "30/11/2025",            // Hạn xác nhận tham dự
        maxGuests: 100,                         // Số khách tối đa mỗi người mời
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
        title: "Thiệp Cưới - Công & Thơ",
        description: "Thiệp cưới online của Công & Thơ - 30.11.2025",
        keywords: "thiệp cưới, wedding invitation, Công, Thơ",
        author: "Happy Wedding"
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
