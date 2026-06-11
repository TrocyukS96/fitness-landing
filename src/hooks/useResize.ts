'use client'
import { LARGE_SIZE, MIDDLE_SIZE, MINI_SIZE, SMALL_SIZE } from '@/app/constants';
import { useState, useEffect } from 'react';

export interface IResize {
  width: number;
  isScreenMini: boolean;
  isScreenSm: boolean;
  isScreenMd: boolean;
  isScreenLg: boolean;
}

const useResize = (): IResize => {
  const [width, setWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Устанавливаем начальное значение
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) {
    return {
      width: 0,
      isScreenMini: false,
      isScreenSm: false,
      isScreenMd: false,
      isScreenLg: false
    };
  }

  return {
    width,
    isScreenMini: width >= MINI_SIZE && width < MIDDLE_SIZE,
    isScreenSm: width >= SMALL_SIZE && width < MIDDLE_SIZE,
    isScreenMd: width >= MIDDLE_SIZE && width < LARGE_SIZE,
    isScreenLg: width >= LARGE_SIZE
  };
};

export default useResize;