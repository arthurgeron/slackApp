import { State } from "@stores/useToastStore/types";


export const selectShouldOpen = (state: State) => state.shouldOpen;
export const selectToastData = (state: State) => state.data;
export const selectSetShouldOpen = (state: State) => state.setShouldOpen;