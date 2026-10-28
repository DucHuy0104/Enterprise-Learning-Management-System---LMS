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

Hệ thống áp dụng Git Flow tinh gọn. Trên GitHub, **`main` là default branch** và giữ phiên bản production/demo; **`develop`** là nhánh tích hợp của nhóm. Không push trực tiếp vào hai nhánh này.

| Loại nhánh | Tạo từ | Mục đích | Nhánh đích của PR |
| --- | --- | --- | --- |
| **`feature/<ten-tinh-nang>`** | `develop` | Phát triển tính năng, ví dụ `feature/login-ui`. | `develop` |
| **`bugfix/<ten-loi>`** | `develop` | Sửa lỗi phát hiện trong quá trình phát triển/tích hợp. | `develop` |
| **`docs/<pham-vi>`** | `develop` | Cập nhật README hoặc tài liệu, ví dụ `docs/update-readme`. | `develop` |
| **`release/<version>`** | `develop` | Ổn định và kiểm thử phiên bản trước demo/phát hành; chỉ tạo khi cần. | `main` |
| **`hotfix/<ten-loi>`** | `main` | Sửa lỗi khẩn cấp ảnh hưởng production/demo. | `main`, sau đó đồng bộ bản sửa về `develop` |

Sau khi release được gộp vào `main`, mọi sửa đổi phát sinh trong quá trình ổn định release phải được đưa lại vào `develop` qua PR. Nhánh feature, bugfix, docs, release và hotfix nên được xóa sau khi PR liên quan đã hoàn tất.

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

### Bước 1: Cập nhật `develop` và tạo nhánh công việc

```bash
git switch develop
git pull origin develop
git switch -c feature/chuc-nang-cua-ban
```

Thay `feature/chuc-nang-cua-ban` bằng loại nhánh phù hợp, như `bugfix/loi-dang-nhap` hoặc `docs/update-readme`. Nhánh `release/<version>` cũng được tạo từ `develop`; riêng `hotfix/<ten-loi>` phải được tạo từ `main`.

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
2. Chọn nhánh đích theo quy tắc ở mục 3: feature/bugfix/docs vào `develop`; release/hotfix vào `main`.
3. Mô tả ngắn gọn các thay đổi trong PR và chọn reviewer phù hợp.

### Bước 5: Kiểm tra và merge

- Đảm bảo GitHub Actions CI pass và PR có ít nhất một approval.
- Chọn **Squash and merge** vào đúng nhánh đích.
- Với hotfix, sau khi PR vào `main` được merge, tạo PR đưa cùng bản sửa về `develop`.
- Xóa nhánh công việc trên GitHub sau khi các PR liên quan đã merge.

---

## 6. Quy Trình Kiểm Thử Tự Động (CI)

GitHub Actions workflow tại `.github/workflows/ci.yml` chạy khi có push hoặc Pull Request vào `main` hay `develop`.

- **Môi trường:** Ubuntu latest, Node.js 20.
- **Frontend:** Nếu thư mục `frontend` tồn tại, cài dependencies bằng `npm install` và chạy `npm run lint --if-present`.
- **Backend:** Nếu thư mục `backend` tồn tại, cài dependencies bằng `npm install` và chạy `npm run build --if-present`.