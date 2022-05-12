import { styled } from '@stitches/react';
import { blackA, blueA, greenA } from '@radix-ui/colors';
import * as Label from '@radix-ui/react-label';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import Image from 'next/image';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export const Container = styled('section', {
  flex: '1',
  padding: '30px 16px 0 16px',
  backgroundColor: '#282c34',
  minHeight: '100vh',
});


export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'row',
})

export const HeaderLabels = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled(Label.Root, {
  color: 'white',
  fontSize: '$3',
  marginBottom: '16px',
});

export const FilterInput = styled('input', {
  all: 'unset',
  width: 400,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 35,
  fontSize: '$2',
  lineHeight: 1,
  color: 'white',
  backgroundColor: '$backgroundHover',
  boxShadow: `0 0 0 1px $backgroundShadow`,
  '&:focus': { boxShadow: `0 0 0 2px ${blueA.blueA7}` },
});
const SCROLLBAR_SIZE = 10;

export const Box = styled('div', {
  padding: '15px 20px',
});

export const StyledScrollArea = styled(ScrollArea.Root, {
  width: '50%',
  height: 225,
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${blackA.blackA10}`,
  marginTop: 16,
});

export const StyledViewport = styled(ScrollArea.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

export const StyledScrollbar = styled(ScrollArea.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  background: '$background',
  transition: 'background 160ms ease-out',
  '&:hover': { background: '$backroundHover' },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

export const StyledThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: '$backgroundThumb',
  borderRadius: SCROLLBAR_SIZE,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

export const ListItemContainer = styled('div', {
  color: '$font',
  lineHeight: '18px',
  marginTop: 10,
  borderBottom: `1px solid $border`,
  display: 'flex',
  flexDirection: 'row',
  padding: '10px 8px',
});

export const SoloLabel = styled('div', {
  color: '$font',
  lineHeight: '18px',
  marginTop: 10,
  borderBottom: `1px solid $border`,
  padding: '10px 8px',
});

export const VerticalLabelContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 10,
});
export const UserId = styled('div', {
  fontSize: '$1',
});
export const UserName = styled('div', {
  fontSize: '$3',
});

export const RealName = styled('div', {
  fontSize: '$2',
});
export const TimeZone = styled('div', {
  fontSize: '$2',
});


export const DeletedLabel = styled('div', {
  fontSize: '$2',
  marginRight: 8,
  marginLeft: 10,
});
export const DeletedValue = styled('div', {
  fontSize: '$1',
  color: '$brand',
  textTransform: 'capitalize',
  marginRight: 10,
});

export const StatusData = styled('div', {
  fontSize: '$1',
  marginRight: 10,
  marginLeft: 10,
});

export const Avatar = styled(Image, {
  margin: 10,
  borderRadius: 8,
});

export const StyledCorner = styled(ScrollArea.Corner, {
  background: '$blackA.blackA8',
});

export const SwitchContainer = styled('div', {
  marginLeft: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});


export const Switch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  variants: {
    checked: {
      true: { backgroundColor: greenA.greenA9 },
      false: { backgroundColor: blackA.blackA9 },
    },
  },
});

export const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: '$white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

export const SwitchLabel = styled('label', {
  color: '$white',
  fontSize: '$2',
  lineHeight: 1,
  paddingRight: 15,
  userSelect: 'none',
});

