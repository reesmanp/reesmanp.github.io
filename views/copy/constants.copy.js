import { List } from 'immutable';

export const NAVIGATION_TABS = List.of(
    List.of('Welcome', '/Welcome'),
    List.of('Bio', '/Bio'),
    List.of('Game Portfolio', '/Game Portfolio'),
    List.of('Machine Learning Portfolio', '/Machine Learning Portfolio'),
    List.of('Resume', '/Resume'),
    List.of('Contact Me', '/Contact Me')
);

export const DEFAULT_TAB = NAVIGATION_TABS.get(0).get(0);
