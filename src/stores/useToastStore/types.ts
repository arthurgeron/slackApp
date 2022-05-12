type ToastData = {
  title: string;
  description: string;
};

export type State = {
  shouldOpen: boolean;
  setShouldOpen: (open: boolean, data?: ToastData) => void;
  data?: ToastData;
};
