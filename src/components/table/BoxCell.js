import React from 'react';
import styles from '../../styles/BoxCell.module.css';
import clsx from 'clsx';

export default function BoxCell(props) {
    const { color, on } = props;
    if (color === 'purple') {
        return <div className={clsx(styles.cell, styles.cellPurple, on && styles.purpleOn)}>{props.text}</div>
    }

    if (color === 'blue') {
        return <div className={clsx(styles.cell, styles.cellBlue, on && styles.blueOn)}>{props.text}</div>
    }

    if (color === 'cyan') {
        return <div className={clsx(styles.cell, styles.cellCyan)}>{props.text}</div>
    }

    return (
        <div className={styles.cell}>{props.text}</div>
    );
}
