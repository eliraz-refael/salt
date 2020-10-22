import React from 'react';
import TitleComponent from './TitleComponent.js';
import Breadcrambs from './Breadcrambs.js';
import Tabs from './Tabs.js';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <TitleComponent />
      <Breadcrambs />
      <Tabs />
    </header>
  );
}
