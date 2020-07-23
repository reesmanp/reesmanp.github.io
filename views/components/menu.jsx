import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_TABS } from "../copy";
import * as styles from '../css/navigation.css';

const INIT_HASH = window.location.hash.split('#/')[1] || NAVIGATION_TABS.get(0);

export function Menu() {
  const [activeTab, setActiveTab] = useState(INIT_HASH);

  return (
    <ul className={styles.navBar}>
      {NAVIGATION_TABS.map((tab,idx) => (
        <li
          key={`menu-tab-${idx}`}
          className={styles.navTab}
          onClick={() => setActiveTab(tab.get(0))}
        >
          <Link
            to={tab.get(1)}
            className={`${styles.navTabLink} ${activeTab === tab.get(0) ? styles.activeTab : ''}`}
          >
            {tab.get(0)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
