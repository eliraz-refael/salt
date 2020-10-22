import React from 'react';
import { atom, selector } from 'recoil';

export const tabsAtom = atom({
    key: 'tabs',
    default: 0
});

export const pageAtom = selector({
    key: 'page',
    get: ({ get }) => {
        const tabs = get(tabsAtom);
        switch (tabs) {
            case 0: default:
                return 'request';
            case 1:
                return 'response';
        }
    }
});
