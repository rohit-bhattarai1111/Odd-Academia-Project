'use client';

import type { ChangeEvent, ReactNode } from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  autoComplete?: string;
}

export default function InputField({
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
  icon,
  autoComplete,
}: InputFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative flex w-full items-center rounded-lg border border-gray-300 bg-white px-3 py-2.5 transition-colors focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
        {icon ? (
          <div className="pointer-events-none flex shrink-0 items-center pr-2 text-gray-400">{icon}</div>
        ) : null}
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="min-w-0 w-full flex-1 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
}
