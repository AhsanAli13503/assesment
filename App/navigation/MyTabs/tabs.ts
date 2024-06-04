// import {Home, Orange, History, Profile} from '../../screens/bottom_tabs';
import TABS_ROUTES from '../routes';
import {Orange, History, Profile, Home} from '../../screens/bottom_tabs';

export const tabs = [
  {
    name: TABS_ROUTES.HOME,
    component: Home,
  },
  {
    name: TABS_ROUTES.ORANGE,
    component: Orange,
  },
  {
    name: TABS_ROUTES.HISTORY,
    component: History,
  },
  {
    name: TABS_ROUTES.PROFILE,
    component: Profile,
  },
];
