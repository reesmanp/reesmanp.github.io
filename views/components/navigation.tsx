import * as React from 'react';
import { connect } from 'react-redux';
import { navigation as Actions } from '../actions';
import * as styles from '../css/navigation.css';

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

const clickHandler = (evt, dispatch: (idx: number) => undefined) => dispatch(evt.target.value);

const NavigationComponent = (props: NavigationProps) => (
  <ul className={styles.navbar}>
    {props.tabs.map((cv: string, idx: number) => (
      <li
        key={cv}
        className={`${styles.navItem} ${props.selectedItem === idx && styles.isActive}`}
        value={idx}
        onClick={evt => clickHandler(evt, props.selectItem)}
      >
        {cv}
      </li>
    ))}
  </ul>
);

const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);

export default Navigation;
