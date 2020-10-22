import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from '../styles/Breadcrambs.module.css';
import { dataAtom } from '../atoms/DataAtom.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Breadcrambs(props) {
    const data = useRecoilValue(dataAtom);
    return (
        <div className={styles.breadcrambs}>
          <span className={styles.item}>All APIs</span>
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
          <span className={styles.item}>{data.api}</span>
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
          <span>{data.path}</span>
        </div>
    )
}
