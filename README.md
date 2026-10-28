# Enterprise-Learning-Management-System---LMS
# Corporate LMS - Nền Tảng Quản Lý Đào Tạo Nội Bộ & Đánh Giá Năng Lực (NovaTech Solutions)

> **Mã đề tài:** DT02 | **Quy mô:** 150 nhân viên
> **Stack chính:** TypeScript, Next.js, NestJS, PostgreSQL, Prisma ORM, Redis, Docker, GitHub Actions

---

## 1. Tổng Quan Dự Án & Bộ Công Nghệ

Dự án **Corporate LMS** hướng tới số hóa toàn bộ quy trình đào tạo nội bộ và đánh giá năng lực nhân viên cho NovaTech Solutions, thay thế phương thức quản lý thủ công bằng bảng tính.

- **Frontend:** Next.js (App Router, TypeScript, Tailwind CSS)
- **Backend:** NestJS (Modular Monolith, TypeScript)
- **Database & ORM:** PostgreSQL + Prisma ORM
- **Cache & Memory:** Redis
- **Containerization:** Docker & Docker Compose
- **CI/CD:** GitHub Actions (`.github/workflows/ci.yml`)
- **Testing:** Playwright (E2E tests) & Jest (unit tests)

---

## 2. Phân Công Vai Trò Dự Án

| Vai trò | Thành viên phụ trách | Nhiệm vụ chính trong tuần 1 và dự án |
| --- | --- | --- |
| **BA / Full-stack Lead** | **Đức Huy** | Quản lý dự án, viết SRS, thiết kế và phê duyệt CSDL (ERD), kiến trúc hệ thống. |
| **Backend Developer** | **Quang Hưng** | Khởi tạo NestJS, thiết lập Prisma ORM với PostgreSQL, phát triển RESTful API. |
| **Frontend Developer** | **Thanh Trọng** | Khởi tạo Next.js, dựng UI/UX (Figma/mockup), phát triển giao diện với mock data. |
| **Assessment Developer** | **Ngọc Trâm** | Thiết kế module quiz, ngân hàng câu hỏi, logic chấm điểm và ma trận năng lực. |
| **QA / DevOps / Integration** | **Minh Tân** | Cấu hình Docker Compose, thiết lập GitHub repository, branch protection và CI/CD pipeline. |

---

## 3. Cấu Trúc Phân Nhánh (Git Flow)

Hệ thống áp dụng mô hình phân nhánh **Git Flow**:

- **`develop`** *(nhánh tích hợp mặc định)*: Nhánh tích hợp chính của nhóm. Các tính năng sau khi review được gộp vào đây.
- **`main`**: Nhánh sản phẩm chính thức (production/demo). Chỉ gộp code từ `develop` khi kết thúc đợt phát triển hoặc chuẩn bị demo nghiệm thu.
- **`feature/<ten-tinh-nang>`**: Nhánh cá nhân tạo từ `develop` để làm từng task, ví dụ `feature/login-ui` hoặc `feature/quiz-schema`.
- **`bugfix/<ten-loi>`**: Nhánh sửa lỗi tạo từ `develop` khi phát hiện bug tích hợp.

---

## 4. Quy Định Bảo Vệ Nhánh

Cả hai nhánh **`main`** và **`develop`** được bảo vệ trên GitHub:

1. **Chặn push trực tiếp:** Mọi thay đổi phải đi qua Pull Request (PR); không push trực tiếp vào `main` hoặc `develop`.
2. **Yêu cầu review và approval:** Cần ít nhất một approval từ thành viên khác có quyền ghi trước khi merge.
3. **Hủy approval cũ:** Nếu có commit mới được push lên PR, approval cũ sẽ bị hủy để yêu cầu review lại (Dismiss stale approvals).
4. **CI phải thành công:** Các kiểm tra bắt buộc từ GitHub Actions phải pass trước khi merge.
5. **Cập nhật nhánh đích:** PR phải đồng bộ với phiên bản mới nhất của nhánh đích trước khi merge.

---

## 5. Quy Trình Làm Việc Hàng Ngày

### Bước 1: Cập nhật `develop` và tạo nhánh tính năng

```bash
git switch develop
git pull origin develop
git switch -c feature/chuc-nang-cua-ban
```

### Bước 2: Lập trình và commit code

```bash
git status
git add .
git commit -m "feat: bổ sung giao diện đăng nhập dạng mock data"
```

Quy ước commit message:

- `feat:` thêm tính năng mới.
- `fix:` sửa lỗi.
- `docs:` cập nhật tài liệu.
- `style:` chỉnh định dạng, không đổi logic.
- `refactor:` cải thiện cấu trúc code.

### Bước 3: Đẩy nhánh cá nhân lên GitHub

```bash
git push -u origin feature/chuc-nang-cua-ban
```

### Bước 4: Tạo Pull Request

1. Truy cập repository trên GitHub và chọn **Compare & pull request**.
2. Chọn **base: `develop`** và **compare: `feature/chuc-nang-cua-ban`**.
3. Mô tả ngắn gọn các thay đổi trong PR.
4. Chọn assignee và reviewer phù hợp.

### Bước 5: Kiểm tra và merge

- Đảm bảo GitHub Actions CI pass và PR có ít nhất một approval.
- Chọn **Squash and merge** để gộp code vào `develop`.
- Xóa nhánh `feature` trên GitHub sau khi merge thành công.

---

## 6. Quy Trình Kiểm Thử Tự Động (CI)

GitHub Actions workflow tại `.github/workflows/ci.yml` chạy khi có push hoặc Pull Request vào `main` hay `develop`.

- **Môi trường:** Ubuntu latest, Node.js 20.
- **Frontend:** Nếu thư mục `frontend` tồn tại, cài dependencies bằng `npm install` và chạy `npm run lint --if-present`.
- **Backend:** Nếu thư mục `backend` tồn tại, cài dependencies bằng `npm install` và chạy `npm run build --if-present`.

Workflow hiện tại chưa chạy lệnh build cho Frontend. Các bước kiểm tra cũng được bỏ qua nếu thư mục tương ứng chưa có trong repository.