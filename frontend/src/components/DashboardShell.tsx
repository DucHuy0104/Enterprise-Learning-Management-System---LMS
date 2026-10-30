import Image from 'next/image';
import { mockUser } from '@/data/mockData';

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-slate-950 p-6 text-slate-50 lg:block">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
            N
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">NovaTech</p>
            <h2 className="text-xl font-bold">LMS</h2>
          </div>
        </div>

        <nav className="mt-10 space-y-2">
          {['Tổng quan', 'Khóa học', 'Đánh giá', 'Nhân sự', 'Cài đặt'].map((item, index) => (
            <button
              key={item}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                index === 0 ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item}
              {index === 0 ? <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs">Live</span> : null}
            </button>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-sm text-slate-500">Trang chủ</p>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                + Tạo mới
              </button>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={mockUser.avatar ?? ''} alt={mockUser.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-800">{mockUser.name}</p>
                  <p className="text-xs text-slate-500">{mockUser.role}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
