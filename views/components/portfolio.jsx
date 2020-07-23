import * as React from 'react';
import { contentCopy } from "../copy";
import * as styles from '../css/portfolio.css';

export function Portfolio(props) {
  const tab = props.match.params.tab;

  return (
    <div className={styles.portfolio}>
      {contentCopy.get(tab.split(' ').join('_')).map((cv, idx) => (
        <div className={styles.item} key={`${tab}-div-${idx}`}>
          <h1 className={styles.header}>
            {idx.split('_').join(' ')}
          </h1>
          {cv.map((ccv, innerIdx) => (
            <div key={`${tab}-div-${idx}-${innerIdx}`}>
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
