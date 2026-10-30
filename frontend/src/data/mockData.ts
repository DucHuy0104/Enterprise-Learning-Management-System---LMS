import type { ActivityItem, CourseItem, DashboardStat, UserProfile } from '@/types';

export const mockUser: UserProfile = {
  id: 'USR-1001',
  name: 'Nguyễn Văn An',
  email: 'an.nguyen@novatech.com',
  role: 'employee',
  department: 'Phòng Nhân sự',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
};

export const mockStats: DashboardStat[] = [
  { label: 'Khóa học đang học', value: '12', change: '+2 tuần này', positive: true },
  { label: 'Hoàn thành', value: '78%', change: '+7% so với tháng trước', positive: true },
  { label: 'Bài kiểm tra', value: '8', change: '2 cần làm lại', positive: false },
  { label: 'Điểm trung bình', value: '88.5', change: '+4.2 điểm', positive: true },
];

export const mockCourses: CourseItem[] = [
  {
    id: 'C-101',
    title: 'Leadership Essentials',
    category: 'Quản lý',
    progress: 72,
    duration: '4 tuần',
    instructor: 'Trần Minh Hòa',
    status: 'active',
  },
  {
    id: 'C-102',
    title: 'Data Analytics for Teams',
    category: 'Phân tích dữ liệu',
    progress: 45,
    duration: '3 tuần',
    instructor: 'Lê Thu Hà',
    status: 'active',
  },
  {
    id: 'C-103',
    title: 'Cybersecurity Basics',
    category: 'An toàn thông tin',
    progress: 100,
    duration: '2 tuần',
    instructor: 'Phạm Quốc Bảo',
    status: 'completed',
  },
  {
    id: 'C-104',
    title: 'Communication Skills',
    category: 'Giao tiếp',
    progress: 15,
    duration: '1 tuần',
    instructor: 'Mai Hoài Thương',
    status: 'upcoming',
  },
];

export const mockActivities: ActivityItem[] = [
  { id: 'A-1', title: 'Hoàn thành module “Safety Workshop”', time: '2 giờ trước', type: 'course' },
  { id: 'A-2', title: 'Bài kiểm tra “Leadership Quiz” sắp hết hạn', time: 'Hôm nay', type: 'assessment' },
  { id: 'A-3', title: 'Khóa học mới đã được thêm vào hệ thống', time: '1 ngày trước', type: 'system' },
  { id: 'A-4', title: 'Bạn được giao nhiệm vụ ôn tập nội dung mới', time: '2 ngày trước', type: 'course' },
];
