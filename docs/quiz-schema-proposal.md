// Bảng 1: Thông tin bài kiểm tra
model Quiz {
  id                 String         @id @default(uuid())
  moduleId           String         // Khóa ngoại liên kết với Học phần (Module)
  title              String
  passingScore       Float          @default(70.0) // Quy tắc BR-01: Đạt >= 70%
  timeLimitMinutes   Int            @default(30)
  maxAttempts        Int            @default(3)
  questions          Question[]
  attempts           QuizAttempt[]
  createdAt          DateTime       @default(now())
}

// Bảng 2: Ngân hàng câu hỏi
model Question {
  id                 String   @id @default(uuid())
  quizId             String
  quiz               Quiz     @relation(fields: [quizId], references: [id])
  questionText       String
  questionType       String   @default("MCQ") // Trắc nghiệm nhiều lựa chọn
  options            Json     // Lưu danh sách lựa chọn A, B, C, D dưới dạng JSONB
  correctAnswer      String
  relatedLessonId    String?  // Khóa ngoại liên kết với Bài học để hệ thống tự động gợi ý ôn tập (Quy tắc BR-03)
}

// Bảng 3: Lịch sử làm bài thi
model QuizAttempt {
  id                 String   @id @default(uuid())
  quizId             String
  quiz               Quiz     @relation(fields: [quizId], references: [id])
  userId             String   // Khóa ngoại liên kết với User (Học viên)
  scorePercentage    Float
  isPassed           Boolean  @default(false) // True nếu điểm >= 70% (BR-01)
  attemptNumber      Int      @default(1)     // Đếm số lần thi lại (BR-03)
  userAnswers        Json     // Lưu chi tiết các câu học viên đã chọn để phân tích câu sai
  createdAt          DateTime @default(now())
}