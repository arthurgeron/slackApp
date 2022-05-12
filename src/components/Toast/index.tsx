
import { selectSetShouldOpen, selectToastData, selectShouldOpen, useToastStore } from '@stores/useToastStore';
import { useEffect } from 'react';
import * as S from './styles';


export function Toast() {
  const shouldOpen = useToastStore(selectShouldOpen);
  const data = useToastStore(selectToastData);
  const setShouldOpen = useToastStore(selectSetShouldOpen);

  useEffect(() => {
    let timeout: number;
    if (shouldOpen) {
        timeout = window.setTimeout(() => {
          setShouldOpen(false);
        }, 3010);
    }

    return () => clearTimeout(timeout);
  }, [setShouldOpen, shouldOpen])

  return (
    <S.ToastProvider swipeDirection="right" duration={3000}>
      <S.Toast open={shouldOpen} >
        <S.ToastTitle>{data?.title}</S.ToastTitle>
        <S.ToastDescription>
          {data?.description}
        </S.ToastDescription>
      </S.Toast>
      <S.ToastViewport />
    </S.ToastProvider>
  );
};
