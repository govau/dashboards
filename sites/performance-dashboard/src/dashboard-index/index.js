// import 'babel-polyfill';
// TODO (davidg): reinstate this autotrack stuff
// import 'autotrack/lib/plugins/event-tracker';
// import 'autotrack/lib/plugins/outbound-link-tracker';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../dashboard/scripts/page';
import HomePage from './components/HomePage/HomePage';
import {getViewport} from '../dashboard/scripts/runOnResize';
import {getIsHighContrastMode} from '../dashboard/scripts/runHighContrastSwitch';
// import '../dashboard/styles/main.scss'; // RITMO need to uncomment this then to bourbon stuff

const pathName = window.location.pathname;
console.log('  --  >  : > pathName', pathName);
const dashboardIdMatch = pathName.match(/^\/dashboards\/(\d+)/);
const urlBase = process.env.NODE_ENV === 'production'
  ? 'api/v1/public'
  : '__mocks__';

if (pathName === '/') {
  console.log('We are home');

  fetch(`/${urlBase}/dashboards.json`)
    .then(response => response.json())
    .then(data => {
      ReactDOM.render(
        <HomePage dashboards={data} />,
        document.getElementById('root'),
      );
    })
    .catch(err => {
      console.error(`Error fetching dashboard data. ${err}`);
    });
} else if (dashboardIdMatch) {
  console.log('  --  >  main.js:29 > we are on the show page ');
  const dashboardId = dashboardIdMatch[1];

  const uiState = {
    viewport: getViewport(),
    isHighContrastMode: getIsHighContrastMode(),
  };

  fetch(`/${urlBase}/dashboards/${dashboardId}.json`)
    .then(response => response.json())
    .then(data => {
      new Page({data: {...data, ui:uiState}});
    })
    .catch(err => {
      console.error(`Error fetching dashboard data. ${err}`);
    });
} else {
  console.warn(`We don't handle the URL ${window.location.pathname}`);
}

// const location = window.location.pathname;
// const pageRoute = location.split('?')[0];
//
// if (pageRoute === '/') {
//   new Page({data: window.__STATE__});
//   if (!__DEV__) {
//     delete window.__STATE__;
//   }
// }
