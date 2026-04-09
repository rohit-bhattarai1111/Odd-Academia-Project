'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginCard from './components/LoginCard';

const credibilityItems = [
  'Build Your Professional Profile',
  'A Platform for Innovators and Thinkers',
  'Share Your Work to LinkedIn',
];

const emailLooksValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter the email in the box.');
      return;
    }
    if (!emailLooksValid(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (trimmed === 'user.oddacademia@gmail.com' && password === 'user123') {
      setError('');
      router.push('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleLinkedIn = () => {
    console.log('LinkedIn login');
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden lg:flex-row">
      <section className="relative flex min-h-0 flex-1 flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 lg:w-1/2 lg:flex-none">
        <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-12 -left-16 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/15 blur-3xl" aria-hidden />

        <div className="relative z-10 flex w-full flex-col justify-center px-8 py-10 lg:px-12">
          <div className="mx-auto flex w-full max-w-lg flex-col gap-6 lg:mx-0">
            <Image
              src="/oddaAcademia.png"
              alt="Odd Academia"
              width={200}
              height={56}
              className="h-12 w-auto object-contain drop-shadow-sm"
              priority
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Share Your Ideas Without Limits
              </h1>
              <p className="max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
                Join researchers and thinkers building credibility through thoughtful publishing.
              </p>
            </div>
            <ul className="flex max-w-md flex-col gap-3 text-sm text-white/95">
              {credibilityItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/25 text-xs font-bold text-white" aria-hidden>
                    ✓
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto bg-gray-50 px-5 py-8 sm:px-8 lg:w-1/2 lg:flex-none lg:px-10">
        <LoginCard
          email={email}
          password={password}
          remember={remember}
          error={error}
          onEmailChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          onPasswordChange={(e) => {
            setPassword(e.target.value);
            if (error) setError('');
          }}
          onRememberChange={() => setRemember(!remember)}
          onSubmit={handleSubmit}
          onLinkedIn={handleLinkedIn}
        />
      </section>
    </div>
  );
}
