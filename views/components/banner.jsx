import * as React from 'react';
import * as styles from '../css/banner.css';

export function Banner() {
    return (
        <div className={styles.banner}>
            <h1 className={styles.name}>
              Paul R. Reesman
            </h1>
            <div className={styles.subBanner}>
              <h3 className={styles.position}>
                Software Development Engineer II,
              </h3>
              <a
                className={styles.company}
                href='https://www.smartsheet.com/about'
                target='_blank'
              >
                Smartsheet, Inc.
              </a>
            </div>
        </div>
    );
}
