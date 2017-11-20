import * as React from 'react';
import { connect } from 'react-redux';
import { navigation as Actions } from '../actions';

interface NavigationProps {
  selectedItem: number;
  selectItem: (item: number) => undefined;
}

const mapStateToProps = (state: any) => ({
  selectedItem: state.getIn(['navigation', 'selectedItem'])
});

const mapDispatchToProps = (dispatch: any) => ({
  selectItem: (item: number) => dispatch(Actions.selectBanner(item))
});

const clickHandler = (evt: any, dispatch: (idx: number) => undefined) => dispatch(evt.target.value);

const NavigationComponent = (props: NavigationProps) => (
  <div className='tabs is-boxed is-fullwidth'>
    <ul>
      {['Welcome', 'Bio', 'Portfolio', 'Tools I Use', 'Resume', 'Blog', 'Contact Me']
        .map((cv: string, idx: number) => {
          const classnames = `${props.selectedItem === idx ? 'is-active' : ''}`;
          return (
            <li
              key={cv}
              className={classnames}
              onClick={evt => clickHandler(evt, props.selectItem)}
              value={idx}
            >
              <a>{cv}</a>
            </li>
          );
        })
      }
    </ul>
  </div>
);

const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);

export default Navigation;
