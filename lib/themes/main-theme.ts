import { extendTheme } from '@chakra-ui/react';
import { Gayathri } from 'next/font/google';

const colors = {
  orange: '#cf913f', // rgb(207, 145, 63)
  green: '#50572f', // rgb(80, 87, 47)
  red: '#db6048', // rgb(219, 96, 72)
  brown: '#cda95a', // rgb(205, 169, 90)
  white: '#f4f4f4', // rgb(244, 244, 244)
  black: '#343434', // rgb(52, 52, 52)
  surface: '#f8e6d5', // rgb(248, 230, 213)
};

const gayathri = Gayathri({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});
const fonts = {
  body: gayathri.style.fontFamily,
  heading: gayathri.style.fontFamily,
};

export const theme = extendTheme({ colors, fonts });
