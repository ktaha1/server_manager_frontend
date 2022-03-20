import { dataState } from '../enum/data-state.enum';

export interface AppState<T> {
  dataState: dataState;
  appData?: T;
  error?: string;
}
