import { atom } from 'recoil';

export const searchAtom = atom({
    key: 'search',
    default: ''
});

export const piiAtom = atom({
    key: 'pii',
    default: false
});
