'use client';
import { useEffect, useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Aditya Kumar</h1>
      <button
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}