import localFont from 'next/font/local';

export const zakon = localFont({
  src: [
    {
      path: './font/Zakon-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Zakon-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './font/Zakon-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/Zakon-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-zakon',
  display: 'swap',
});