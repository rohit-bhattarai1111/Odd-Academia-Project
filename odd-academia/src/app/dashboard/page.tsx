'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-slate-100 p-2">
              <Image
                src="/oddaAcademia.png"
                alt="Odd Academia Logo"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Odd Academia</p>
              <h1 className="text-xl font-semibold text-slate-900">Research Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">useroddacademia</p>
              <p className="text-xs text-slate-500">Independent researcher</p>
            </div>
            <button
              onClick={handleLogout}
              className="rounded-2xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
          <section className="space-y-6 rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-sky-50 p-3 text-sky-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Profile</p>
                <h2 className="text-lg font-semibold text-slate-900">Ready to publish</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500">Name</p>
                <p className="text-base font-semibold text-slate-900">Odd Academia</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Role</p>
                <p className="text-base font-semibold text-slate-900">Independent researcher</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Followers</p>
                <p className="text-base font-semibold text-slate-900">1.8K</p>
              </div>
            </div>
            <button className="w-full rounded-3xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
              Create New Paper
            </button>
          </section>

          <section className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Recent publications</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">3 published papers</h3>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-3 text-sky-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2v6h6v-6c0-1.105-1.343-2-3-2zM5 8a7 7 0 0114 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Drafts</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">2 drafts waiting</h3>
                  </div>
                  <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9M12 4h9M3 8h18M3 16h18M3 12h18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-slate-500">Research feed</p>
                  <h2 className="text-xl font-semibold text-slate-900">Latest posts</h2>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Updated
                </span>
              </div>

              <div className="space-y-4">
                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Data ethics</span>
                    <span>2h ago</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">Exploring trust in open research networks</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">A short post on how independent scholars can build credibility through transparent research practices.</p>
                </article>
                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Long-form</span>
                    <span>1d ago</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">Designing inclusive publication workflows</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Ideas for helping thoughtful authors move from draft to polished academic output more smoothly.</p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}