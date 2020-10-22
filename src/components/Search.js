import React from 'react';
import styles from '../styles/Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSetRecoilState } from 'recoil';
import { searchAtom, piiAtom } from '../atoms/SearchAtom.js';

export default function Search() {
  const [search, setSearch] = React.useState('');
  const [pii, setPii]       = React.useState(false);
  const setSearchAtom       = useSetRecoilState(searchAtom);
  const setPiiAtom          = useSetRecoilState(piiAtom);

  const handleSearchChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handlePiiChange = e => {
    setPii(e.currentTarget.checked);
  }

  const applyFilters = () => {
    setSearchAtom(search);
    setPiiAtom(pii);
  }

  const resetFilters = () => {
    setSearchAtom('');
    setPiiAtom(false);
    setSearch('');
    setPii(false);
  }

  return (
    <>
      <div className={styles.search}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input name="" type="text" className={styles.input} placeholder="Search" value={search} onChange={handleSearchChange} />
        <div className={styles.checkboxWrapper}>
          <input id="checkbox" name="checkbox" type="checkbox" className={styles.checkbox} checked={pii} onChange={handlePiiChange} />
          <label htmlFor="checkbox" className={styles.label}>Show PII only</label>
        </div>
        <button className={styles.button} onClick={applyFilters}>
          Apply
        </button>
      </div>
      <div className={styles.resetWrapper}>
        <a className={styles.reset} onClick={resetFilters}>Reset Filter</a>
      </div>
    </>
  )
}
