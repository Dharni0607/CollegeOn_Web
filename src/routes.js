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


const Tables = Loadable({
  loader: () => import('./views/Base/Tables'),
  loading: Loading,
});



const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
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
  { path: '/base/AssProcards', name: 'AssProCards', component:AssProCards },
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

];

export default routes;
