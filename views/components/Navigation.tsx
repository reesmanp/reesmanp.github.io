import * as React from 'react';
import { connect } from 'react-redux';
import { navigation as Actions } from '../actions';

interface NavigationProps {
  selectedItem: number;
  selectItem: (item: number) => undefined;
  tabs: string[]
}

const mapStateToProps = state => ({
  selectedItem: state.getIn(['navigation', 'selectedItem']),
  tabs: state.getIn(['navigation', 'tabs'])
});

const mapDispatchToProps = dispatch => ({
  selectItem: (item: number) => dispatch(Actions.selectBanner(item))
});

const clickHandler = (evt, dispatch: (idx: number) => undefined) => dispatch(evt.target.parentNode.value);

const NavigationComponent = (props: NavigationProps) => (
  <div className='tabs is-boxed is-fullwidth'>
    <ul>
      {props.tabs.map((cv: string, idx: number) => {
        const classnames = `${props.selectedItem === idx ? 'is-active' : ''}`;
        return (
          <li
            key={cv}
            className={classnames}
            value={idx}
          >
            <a onClick={evt => clickHandler(evt, props.selectItem)}>
              {cv}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);

export default Navigation;
