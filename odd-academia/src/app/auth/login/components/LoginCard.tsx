'use client';

import Link from 'next/link';
import type { ChangeEvent, FormEvent } from 'react';
import AuthDivider from './AuthDivider';
import InputField from './InputField';
import SocialButton from './SocialButton';

interface LoginCardProps {
  email: string;
  password: string;
  remember: boolean;
  error: string;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRememberChange: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onLinkedIn: () => void;
}

export default function LoginCard({
  email,
  password,
  remember,
  error,
  onEmailChange,
  onPasswordChange,
  onRememberChange,
  onSubmit,
  onLinkedIn,
}: LoginCardProps) {
  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
      <div className="flex flex-col gap-1 text-center">
        <p className="text-xs font-semibold uppercase text-blue-600">Odd Academia</p>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Sign in</h1>
        <p className="text-sm text-gray-500 sm:text-base">Login to continue your research journey</p>
      </div>

      <form onSubmit={onSubmit} className="mt-8 flex w-full flex-col gap-5" noValidate>
        <SocialButton
          label="Continue with LinkedIn"
          onClick={onLinkedIn}
          icon={
            <svg
              width={16}
              height={16}
              className="size-4 shrink-0 text-[#0A66C2]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M4.98 3.5C4.98 4.6 4.12 5.5 3 5.5S1 4.6 1 3.5 1.88 1.5 3 1.5s1.98.9 1.98 2zm.02 4.5H1v14h4v-14zm7 0h-4v14h4v-7.2c0-3.9 5-4.2 5 0v7.2h4v-8.4c0-7.4-8-7.1-9 0V8z" />
            </svg>
          }
        />

        <AuthDivider />

        <InputField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          placeholder="you@example.com"
          onChange={onEmailChange}
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          placeholder="Password"
          onChange={onPasswordChange}
        />

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-600">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={onRememberChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
            />
            Remember me
          </label>
          <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
            Forgot password?
          </a>
        </div>

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
        ) : null}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Login
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-500">
        Don&apos;t have an account?{' '}
        <Link href="/auth/register" className="font-semibold text-blue-600 hover:text-blue-700">
          Register here
        </Link>
      </p>
    </div>
  );
}
