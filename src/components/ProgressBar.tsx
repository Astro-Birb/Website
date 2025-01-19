'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setProgress(0);
      setVisible(true);
      requestAnimationFrame(() => {
        setProgress(30);
        setTimeout(() => setProgress(70), 50);
      });
    };

    const handleStop = () => {
      setProgress(100);
      setTimeout(() => setVisible(false), 200);
    };

    const startEvent = () => document.addEventListener('navigationstart', handleStart);
    const stopEvent = () => document.addEventListener('navigationend', handleStop);

    startEvent();
    stopEvent();

    return () => {
      document.removeEventListener('navigationstart', handleStart);
      document.removeEventListener('navigationend', handleStop);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1"
      style={{ 
        transform: 'translateZ(9999px)',
        zIndex: 9999,
        backgroundColor: '#e8eafd'
      }}
    >
      <div 
        className="h-full"
        style={{ 
          width: `${progress}%`,
          transition: 'width 150ms cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'linear-gradient(to right, #5c66ea, #7c84ee)'
        }}
      />
    </div>
  );
}
