import { atom, selector } from 'recoil';
import appData from '../data.js';
import { searchAtom, piiAtom } from './SearchAtom.js';
import { pageAtom } from './TabsAtom.js';

export const dataAtom = atom({
    key: 'data',
    default: appData
});

export const filteredData = selector({
    key: 'filteredData',
    get: ({ get }) => {
        const data = get(dataAtom);
        const search = get(searchAtom);
        const pii = get(piiAtom);
        const page = get(pageAtom);
        const { urlParams, body, headers, queryParams } = data.request;

        function filterRow(row) {
            if (pii) {
                return (row.pii && (row.name.includes(search) || row.type.includes(search)));
            }
            return (row.name.includes(search) || row.type.includes(search));
        }

        const request = {
            urlParams: urlParams.filter(filterRow),
            body: body.filter(filterRow),
            headers: headers.filter(filterRow),
            queryParams: queryParams.filter(filterRow)
        }

        const response = {
            body: data.response.body.filter(filterRow),
            headers: data.response.headers.filter(filterRow),
        }

        return {
            api: data.api,
            method: data.method,
            path: data.path,
            request,
            response
        }
    }
});
