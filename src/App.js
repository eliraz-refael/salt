import React from 'react';
import { RecoilRoot } from 'recoil';
import styles from './styles/App.module.css';
import Header from './components/Header.js';
import Search from './components/Search.js';
import Table from './components/table/Table.js';
import TextCell from './components/table/TextCell.js';
import BoxCell from './components/table/BoxCell.js';

const columns = [
  { name: 'Name', width: 2, accessor: row => <TextCell text={row.name }/> },
  { name: 'PII', width: 1, accessor: row => <BoxCell color="blue" text="PII" on={row.pii} /> },
  { name: 'Masking', width: 1, accessor: row => <BoxCell color="purple" text="MASKED" on={row.masked} /> },
  { name: 'Type', width: 5, accessor: row => <BoxCell color="cyan" text={row.type} /> }
];

function App() {
  return (
    <RecoilRoot>
      <div className={styles.App}>
        <Header />
        <div className={styles.content}>
          <Search />
          <Table columns={columns} type="request" />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
