import React from 'react';
import styles from '../styles/Title.module.css';
import { useRecoilValue } from 'recoil';
import { dataAtom } from '../atoms/DataAtom.js';

export default function TitleComponent(props) {
  const { path, method } = useRecoilValue(dataAtom);
  return (
    <div className={styles.title}>
      <span className={styles.titleMethod}>{method}</span>
      <span className={styles.titlePath}>{path}</span>
    </div>
  );
}
