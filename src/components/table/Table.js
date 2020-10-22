import React from 'react';
import styles from '../../styles/Table.module.css';
import TableHeader from './TableHeader.js';
import TableRow from './TableRow.js';
import Group from './Group.js';
import { useRecoilValue } from 'recoil';
import { filteredData } from '../../atoms/DataAtom.js';
import { pageAtom } from '../../atoms/TabsAtom.js';

export default function Table({ columns }) {
  const data = useRecoilValue(filteredData);
  const page = useRecoilValue(pageAtom);
  const { urlParams, queryParams, headers, body } = data[page];

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        {columns.map(({ name, width }) => (
          <TableHeader name={name} width={width} key={name} />
        ))}
      </div>
      <div className={styles.rowsWrapper}>
        { page === 'request' && (
          <Group title="URL Parameters">
            {urlParams.map(row => (
              <TableRow row={row} columns={columns} key={row.name} />
            ))}
          </Group>
        )}
        { page === 'request' && (
          <Group title="Query Parameters">
            {queryParams.map(row => (
              <TableRow row={row} columns={columns} key={row.name} />
            ))}
          </Group>
        )}
        <Group title="Headers">
          {headers.map(row => (
            <TableRow row={row} columns={columns} key={row.name} />
          ))}
        </Group>
        <Group title="Body">
          {body.map(row => (
            <TableRow row={row} columns={columns} key={row.name} />
          ))}
        </Group>
      </div>
    </div>
  );
}
