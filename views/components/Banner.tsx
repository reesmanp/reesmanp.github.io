import * as React from 'react';
import { connect } from 'react-redux';

interface BannerProps {
}

const BannerComponent = (props: BannerProps) => (
  <section className='hero is-primary is-bold'>
    <div className='hero-body'>
      <div className='container'>
        <h1 className='title'>
          Paul R. Reesman
        </h1>
        <h2 className='subtitle'>
          Engineer I, Nordstrom Inc.
        </h2>
      </div>
    </div>
  </section>
);

const Banner = connect()(BannerComponent);

export default Banner;
