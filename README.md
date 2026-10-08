### Thông tin chi tiết 📚

- Dựa trên công trình nghiên cứu của Hồ Ngọc Đức tại địa chỉ:  
  https://www.informatik.uni-leipzig.de/~duc/amlich/
- Kiểm tra phép tính tuần trăng tại địa chỉ:
    - https://www.moonpage.com/
    - https://stardate.org/nightsky/moon
- Về mã nguồn, bạn có thể tham khảo các trang web trên.

### Bảng tính can giờ theo can ngày: 🌜

| Can Ngày/ Giờ | Giáp/Kỷ   | Ất/Canh   | Bính/Tân  | Đinh/Nhâm | Mậu/Quý   |
| ------------- | --------- | --------- | --------- | --------- | --------- |
| Tý (23-1)     | Giáp Tý   | Bính Tý   | Mậu Tý    | Canh Tý   | Nhâm Tý   |
| Sửu (1-3)     | Ất Sửu    | Đinh Sửu  | Kỷ Sửu    | Tân Sửu   | Quý Sửu   |
| Dần (3-5)     | Bính Dần  | Mậu Dần   | Canh Dần  | Nhâm Dần  | Giáp Dần  |
| Mão (5-7)     | Đinh Mão  | Kỷ Mão    | Tân Mão   | Quý Mão   | Ất Mão    |
| Thìn (7-9)    | Mậu Thìn  | Canh Thìn | Nhâm Thìn | Giáp Thìn | Bính Thìn |
| Tị (9-11)     | Kỷ Tị     | Tân Tị    | Quý Tị    | Ất Tị     | Đinh Tị   |
| Ngọ (11-13)   | Canh Ngọ  | Nhâm Ngọ  | Giáp Ngọ  | Bính Ngọ  | Mậu Ngọ   |
| Mùi (13-15)   | Tân Mùi   | Quý Mùi   | Ất Mùi    | Đinh Mùi  | Kỷ Mùi    |
| Thân (15-17)  | Nhâm Thân | Giáp Thân | Bính Thân | Mậu Thân  | Canh Thân |
| Dậu (17-19)   | Quý Dậu   | Ất Dậu    | Đinh Dậu  | Kỷ Dậu    | Tân Dậu   |
| Tuất (19-21)  | Giáp Tuất | Bính Tuất | Mậu Tuất  | Canh Tuất | Nhâm Tuất |
| Hợi (21-23)   | Ất Hợi    | Đinh Hợi  | Kỷ Hợi    | Tân Hợi   | Quý Hợi   |

Can giờ lệ thuộc vào can ngày.
Ví dụ:

- Ngày có can Giáp và Kỷ thì giờ Tý có can Giáp.
- Ngày có can Mậu và Quý thì giờ Tý có can Nhâm.

### Phát triển 🛠️

Yêu cầu: Node.js và [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev      # chạy dev server (có hot reload)
pnpm build    # build ra thư mục dist/
pnpm preview  # xem thử bản build
```

### Lưu trữ online & đăng nhập 🔐

Sự kiện của người dùng được lưu trên **Firebase (Firestore)** theo tài khoản Google. Khi chưa đăng nhập vẫn xem được lịch nhưng không lưu; sau khi đăng nhập, thay đổi được tự động lưu. Ứng dụng không dùng `localStorage`.

Cần tạo project Firebase và cấu hình trước khi chạy:

1. Tạo project trên https://console.firebase.google.com, thêm một **Web app**.
2. Bật **Authentication → Sign-in method → Google**.
3. Tạo **Firestore Database** (Production mode), dán nội dung `firestore.rules` vào tab Rules.
4. Thêm domain vào **Authentication → Settings → Authorized domains**: `localhost` và `copthuy.github.io`.
5. Sao chép `.env.example` thành `.env.local` rồi điền cấu hình lấy từ *Project settings → Your apps*.

```bash
cp .env.example .env.local
```

> Cấu hình Firebase (apiKey, projectId, …) là công khai và an toàn khi đặt ở frontend, vì dữ liệu được bảo vệ bằng **Security Rules** (`uid == request.auth.uid`).
