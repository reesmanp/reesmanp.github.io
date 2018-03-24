import * as React from 'react';
import { connect } from 'react-redux';
import * as styles from '../css/banner.css';

interface BannerProps {
}

const BannerComponent = (props: BannerProps) => (
  <div className={styles.banner}>
    <h1 className={styles.name}>
      Paul R. Reesman
    </h1>
    <div className={styles.subBanner}>
      <h3 className={styles.position}>
        Engineer I,
      </h3>
      <a
        className={styles.company}
        href='https://shop.nordstrom.com'
        target='_blank'
      >
        Nordstrom
      </a>
    </div>
  </div>
);

const Banner = connect()(BannerComponent);

export default Banner;
