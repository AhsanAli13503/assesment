import {Home, Orange, History, Profile} from '../../screens/bottom_tabs';
import {TABS} from '../routes';

export const tabs = [
  {
    name: TABS.HOME,
    componet: Home,
  },
  {
    name: TABS.ORANGE,
    componet: Orange,
  },
  {
    name: TABS.HISTORY,
    componet: History,
  },
  {
    name: TABS.PROFILE,
    componet: Profile,
  },
];
