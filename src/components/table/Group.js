import React from 'react';
import clsx from 'clsx';
import styles from '../../styles/Group.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function Group(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prevState => !prevState);
  }

  return (
    <div className={styles.group}>
      <div className={styles.title} onClick={handleClick}>
        <FontAwesomeIcon icon={faAngleRight} className={clsx(styles.icon, open && styles.iconOpen)} />
        {props.title}
      </div>
      {open && (
        <div className={styles.content}>
          {props.children}
        </div>
      )}
    </div>
  );
}
