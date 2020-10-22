import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from '../styles/Tabs.module.css';
import { useSetRecoilState } from 'recoil';
import { tabsAtom } from '../atoms/TabsAtom.js';

export default function TabComponent() {
  const [value, setValue] = React.useState(0);
  const setPage = useSetRecoilState(tabsAtom);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(newValue)
  };

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      className={styles.tabs}
    >
      <Tab label="Request" />
      <Tab label="Response" />
    </Tabs>
  )
}
