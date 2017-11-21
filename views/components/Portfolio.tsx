import * as React from 'react';
import { connect } from 'react-redux';
import { textStore } from '../stores';

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
    {textStore.get(`${props.tabs[props.selectedItem]}`).map((cv, k) => (
      <div>
        <header className='card-header is-size-2'>
          <p className='card-header-title'>
            {k}
          </p>
        </header>
        {cv.map((ccv: string, kk) => (
          <div className='card'>
            <header className='card-header is-size-3'>
              <p className='card-header-title has-text-grey'>
                {kk}
              </p>
            </header>
            <div className='card-content'>
              <div dangerouslySetInnerHTML={{__html: ccv}} />
            </div>
          </div>
        )).values()}
      </div>
    )).values()}
  </div>
);

const Portfolio = connect(mapStateToProps)(PortfolioComponent);

export default Portfolio;
