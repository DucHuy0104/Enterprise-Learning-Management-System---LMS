export async function loginMock(email: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!email || !password) {
    return { success: false, message: 'Vui lòng nhập email và mật khẩu.' };
  }

  if (email.includes('@') && password.length >= 6) {
    return {
      success: true,
      message: 'Đăng nhập thành công',
      user: {
        id: 'USR-1001',
        name: 'Nguyễn Văn An',
        email,
        role: 'employee',
        department: 'Phòng Nhân sự',
      },
    };
  }

  return { success: false, message: 'Email hoặc mật khẩu không hợp lệ.' };
}
