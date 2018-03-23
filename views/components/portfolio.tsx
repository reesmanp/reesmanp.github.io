import * as React from 'react';
import { connect } from 'react-redux';
import { textStore } from '../stores';
import * as styles from '../css/portfolio.css';

interface PortfolioProps {
  isActive: boolean;
  selectedItem: number;
  tabs: string[];
}

const mapStateToProps = state => ({
  isActive: state.getIn(['navigation', 'tabs'])[state.getIn(['navigation', 'selectedItem'])] !== 'Resume',
  selectedItem: state.getIn(['navigation', 'selectedItem']),
  tabs: state.getIn(['navigation', 'tabs'])
});

const PortfolioComponent = (props: PortfolioProps) => (
  props.isActive &&
    <div className={styles.portfolio}>
      {textStore.get(`${props.tabs[props.selectedItem]}`).map((cv, k) => (
        <div className={styles.item}>
          <h1 className={styles.header}>
            {k}
          </h1>
          {cv.map((ccv: string, kk) => (
            <div>
              <h2 className={styles.subHeader}>
                {kk}
              </h2>
              <div className={styles.text} dangerouslySetInnerHTML={{__html: ccv}} />
            </div>
          )).values()}
        </div>
      )).values()}
    </div>
);

const Portfolio = connect(mapStateToProps)(PortfolioComponent);

export default Portfolio;
