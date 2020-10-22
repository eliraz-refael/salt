import React from 'react';
import styles from '../../styles/Table.module.css';

export default function TableHeader({ name, width }) {
    return (
        <div style={{ flex: width ? width : '1' }}>{name}</div>
    );
}
