# 🧭 Destini - Truyện tương tác chọn lối đi (React Native + Expo)

Ứng dụng truyện tương tác dạng "chọn hành động"

## ✨ Chức năng

- Hiển thị đoạn truyện (`storyTitle`) và hai nút lựa chọn (đỏ: lựa chọn 1, xanh: lựa chọn 2).
- Dữ liệu truyện tách thành class `Story`, logic điều hướng nằm trong class `StoryBrain`.
- Mỗi lựa chọn dùng chỉ số `nextStory1` / `nextStory2` để chuyển đến đoạn tiếp theo trong `_storyData`.
- Đến đoạn kết, nút lựa chọn 2 tự ẩn (`Visibility`), chỉ còn nút **Bắt đầu lại**.
- Hình nền lấy từ `assets/background.png`.
- Hiệu ứng mờ dần khi chuyển đoạn truyện (`Animated`).

## 🛠 Công nghệ sử dụng

- [React Native](https://reactnative.dev/)
- [Expo SDK](https://expo.dev/)

## 🗺 Sơ đồ các nhánh truyện

```
        [0] Xe hỏng giữa đèo
        /                   \
 (1) Chào người lạ     (2) Khóa cửa chờ
       |                      |
       |                  [1] Tiếng gõ cửa kính
       |                  /               \
       |        (1) Hé cửa sổ       (2) Bấm còi
       |             |                    |
       +-----> [2] Người thợ sửa xe   [4] KẾT: bị phạt
               /              \
   (1) Đường tắt      (2) Đường nhựa
          |                    |
   [5] KẾT: thác nước    [3] KẾT: đến gara
```

## 📁 Cấu trúc thư mục

```
Destini/
├── assets/
│   └── background.png
├── screenshots/
├── App.js          (giao diện)
├── Story.js        (class Story)
├── StoryBrain.js   (class StoryBrain)
├── app.json
├── package.json
└── README.md
```

## 🚀 Cài đặt và chạy

**Yêu cầu:** Node.js 18 trở lên, ứng dụng **Expo Go** trên điện thoại (hoặc emulator).

```bash
# 1. Clone dự án
git clone https://github.com/<username>/<repo>.git
cd <repo>

# 2. Cài thư viện
npm install

# 3. Chạy ứng dụng
npx expo start
```
