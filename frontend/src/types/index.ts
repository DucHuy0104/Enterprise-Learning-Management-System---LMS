export type UserRole = 'admin' | 'manager' | 'employee';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  avatar?: string;
}

export interface DashboardStat {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export interface CourseItem {
  id: string;
  title: string;
  category: string;
  progress: number;
  duration: string;
  instructor: string;
  status: 'active' | 'upcoming' | 'completed';
}

export interface ActivityItem {
  id: string;
  title: string;
  time: string;
  type: 'course' | 'assessment' | 'system';
}
