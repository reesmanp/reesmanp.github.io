import * as React from 'react';
import { Banner } from './Banner';

export class Base extends React.Component<{}, {}> {
  render () {
    return (
      <div>
        <Banner/>
      </div>
    );
  }
}
