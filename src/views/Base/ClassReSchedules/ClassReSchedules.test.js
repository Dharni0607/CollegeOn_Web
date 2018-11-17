import React from 'react';
import ReactDOM from 'react-dom';
import ClassReSchedules from './ClassReSchedules';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClassReSchedules />, div);
  ReactDOM.unmountComponentAtNode(div);
});
