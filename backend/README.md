# Corporate LMS - Backend (NestJS)

Dịch vụ Backend cho nền tảng quản lý đào tạo nội bộ Corporate LMS (NovaTech Solutions), phát triển bằng **NestJS** và **TypeScript**.

---

## 1. Yêu Cầu Môi Trường

Đảm bảo máy tính đã cài đặt:
- **Node.js**: Phiên bản 20 trở lên.
- **Docker Desktop**: Đang bật để chạy PostgreSQL và Redis.

---

## 2. Hướng Dẫn Cài Đặt & Khởi Chạy

### Bước 1: Khởi động Database & Cache
Mở Terminal tại thư mục gốc của dự án (`Enterprise-Learning-Management-System---LMS`) và chạy:

```bash
docker compose up -d
```
> Kiểm tra bằng lệnh `docker compose ps` thấy `lms_postgres` và `lms_redis` báo **`Up (healthy)`** là thành công.

---

### Bước 2: Cài đặt thư viện
Di chuyển vào thư mục `backend` và cài đặt các dependencies:

```bash
cd backend
npm install
```

---

### Bước 3: Tạo file môi trường (`.env`)
Tạo một file có tên là **`.env`** ngay trong thư mục `backend/` và dán nội dung sau:

```env
# Kết nối PostgreSQL Docker Local
DATABASE_URL="postgresql://lms_user:lms_password@localhost:5432/corporate_lms?schema=public"

# Kết nối Redis Local
REDIS_URL="redis://localhost:6379"

# Cổng khởi chạy Backend
PORT=5000
```
*(Bạn cũng có thể đổi tên file `.env.example` trong thư mục backend thành `.env` ).*

---

### Bước 4: Khởi chạy Server Backend

Chạy lệnh sau để khởi động server ở chế độ phát triển (tự động reload khi sửa code):

```bash
npm run start:dev
```

Sau khi chạy xong, mở trình duyệt truy cập:
`http://localhost:3000`

Nếu thấy hiển thị dòng chữ:
```text
Hello World!
```
là bạn đã cài đặt và chạy thành công!

---

## 3. Kiểm Tra Build Trước Khi Tạo Pull Request

Trước khi push code lên GitHub, hãy chạy lệnh build để đảm bảo không có lỗi:

```bash
npm run build
```
*(Lệnh này kết thúc êm đẹp và tạo ra thư mục `dist/` là đạt chuẩn CI).*
