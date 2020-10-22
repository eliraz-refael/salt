import React from 'react';
import styles from '../../styles/Table.module.css';

export default function TableRow({ row, columns }) {
    return (
        <div className={styles.row}>
          {columns.map(({ accessor, width, name }) => (
              <div style={{ flex: width }} key={name}>{accessor(row)}</div>
          ))}
        </div>
    )
}
