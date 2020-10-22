import React from 'react';
import styles from '../../styles/TextCell.module.css';

export default function TextCell(props) {
    return (
        <div className={styles.cell}>{props.text}</div>
    );
}
