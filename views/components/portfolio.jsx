import * as React from 'react';
import { useParams } from 'react-router-dom';
import {contentCopy, DEFAULT_TAB} from '../copy';
import * as styles from '../css/portfolio.css';

export function Portfolio() {
  const { tab } = useParams();
  const current_tab = tab || DEFAULT_TAB;

  return (
    <div className={styles.portfolio}>
      {contentCopy.get(current_tab.split(' ').join('_')).map((cv, idx) => (
        <div className={styles.item} key={`${current_tab}-div-${idx}`}>
          <h1 className={styles.header}>
            {idx.split('_').join(' ')}
          </h1>
          {cv.map((ccv, innerIdx) => (
            <div key={`${current_tab}-div-${idx}-${innerIdx}`}>
              <h2 className={styles.subHeader}>
                {innerIdx}
              </h2>
              <div className={styles.text} dangerouslySetInnerHTML={{__html: ccv}} />
            </div>
          )).valueSeq()}
        </div>
      )).valueSeq()}
    </div>
  );
}
