import create, { SetState } from 'zustand';

import type { State } from './types';

export const useToastStore = create<State>((set: SetState<State>) => ({
  shouldOpen: false,
  setShouldOpen: (open, data) => set({shouldOpen: open, data}),
  data: {
    title: '',
    description: '',
  }
}));

export * from './selectors';
