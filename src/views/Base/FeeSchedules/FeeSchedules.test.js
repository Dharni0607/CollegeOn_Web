import React from 'react';
import ReactDOM from 'react-dom';
import FeeSchedules from './FeeSchedules';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeeSchedules />, div);
  ReactDOM.unmountComponentAtNode(div);
});
