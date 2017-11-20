import * as React from 'react';
import { connect } from 'react-redux';

interface PortfolioProps {
  selectedItem: number;
  tabs: string[];
}

const mapStateToProps = state => ({
  selectedItem: state.getIn(['navigation', 'selectedItem']),
  tabs: state.getIn(['navigation', 'tabs'])
});

const PortfolioComponent = (props: PortfolioProps) => (
  <div className='card'>
    <header className='card-header is-size-1'>
      <p className='card-header-title'>
        {props.tabs[props.selectedItem]}
      </p>
    </header>
  </div>
);

const Portfolio = connect(mapStateToProps)(PortfolioComponent);

export default Portfolio;
