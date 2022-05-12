import { createStitches } from '@stitches/react';
import { blackA, mauve, blueA } from '@radix-ui/colors';

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      font: 'white',
      background: blackA.blackA5,
      backgroundShadow: blackA.blackA9,
      backgroundShadowSecondary: blackA.blackA7,
      backgroundHover: blackA.blackA8,
      backgroundThumb: mauve.mauve10,
      brand: blueA.blueA8,
      border: mauve.mauve6,
      white: 'white',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '18px',
    },
  },
});