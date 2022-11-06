import { atom } from 'recoil';

export const appState = atom({
  key: 'app/appState',
  default: {
    sample1: '',
    sample2: '',
  },
});
