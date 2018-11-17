import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';


function Loading() {
  return <div>Loading...</div>;
}


const Cards = Loadable({
  loader: () => import('./views/Base/Cards'),
  loading: Loading,
});

const AssProCards = Loadable({
  loader: () => import('./views/Base/AssProCards'),
  loading: Loading,
});

const PreClassReqCards = Loadable({
  loader: () => import('./views/Base/PreClassReqCards'),
  loading: Loading,
});

const ClassReSchCards = Loadable({
  loader: () => import('./views/Base/ClassReSchCards'),
  loading: Loading,
});
const FeeSchedulesCards = Loadable({
  loader: () => import('./views/Base/FeeSchedulesCards'),
  loading: Loading,
});

const EventsCards = Loadable({
  loader: () => import('./views/Base/EventsCards'),
  loading: Loading,
});


const Collapses = Loadable({
  loader: () => import('./views/Base/Collapses'),
  loading: Loading,
});

const Dropdowns = Loadable({
  loader: () => import('./views/Base/Dropdowns'),
  loading: Loading,
});

const Forms = Loadable({
  loader: () => import('./views/Base/Forms'),
  loading: Loading,
});

const Events = Loadable({
  loader: () => import('./views/Base/Events'),
  loading: Loading,
});

const AssPro = Loadable({
  loader: () => import('./views/Base/AssPro'),
  loading: Loading,
});

const FeeSchedules = Loadable({
  loader: () => import('./views/Base/FeeSchedules'),
  loading: Loading,
});

const ClassReSchedules = Loadable({
  loader: () => import('./views/Base/ClassReSchedules'),
  loading: Loading,
});

const PreClassReq = Loadable({
  loader: () => import('./views/Base/PreClassReq'),
  loading: Loading,
});

const Popovers = Loadable({
  loader: () => import('./views/Base/Popovers'),
  loading: Loading,
});



const Tables = Loadable({
  loader: () => import('./views/Base/Tables'),
  loading: Loading,
});



const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});



const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Cards},
  { path: '/dashboard', name: 'Dashboard', component: Cards },
  //{ path: '/theme', exact: true, name: 'Theme', component: Colors },
 //  { path: '/theme/colors', name: 'Colors', component: Colors },
 //  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/AssProcards', name: 'AssProCards', component: AssProCards },
  { path: '/base/Eventscards', name: 'EventsCards', component: EventsCards },
  { path: '/base/PreClassReqcards', name: 'PreClassReqCards', component: EventsCards },
  { path: '/base/ClassReSchcards', name: 'ClassReSchCards', component: ClassReSchCards },
  { path: '/base/FeeSchedulescards', name: 'FeeSchedulesCards', component: ClassReSchCards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/AssPro', name: 'AssPro', component: AssPro },
  { path: '/base/Events', name: 'Events', component: Events },
  { path: '/base/PreClassReq', name: 'PreClassReq', component: PreClassReq },
  { path: '/base/FeeSchedules', name: 'FeeSchedules', component: FeeSchedules },
  { path: '/base/ClassReSchedules', name: 'ClassReSchedules', component: ClassReSchedules },
  //{ path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
 // { path: '/base/tabs', name: 'Tabs', component: Tabs },
  //{ path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
 // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
 // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  //{ path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  //{ path: '/base/navbars', name: 'Navbars', component: Navbars },
  //{ path: '/base/navs', name: 'Navs', component: Navs },
  //{ path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  //{ path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  //{ path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
 //  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
 //  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  // { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  // { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
   //{ path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
   //{ path: '/widgets', name: 'Widgets', component: Widgets },
   //{ path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
