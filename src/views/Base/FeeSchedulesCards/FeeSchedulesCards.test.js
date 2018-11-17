import React from 'react';
import ReactDOM from 'react-dom';
import FeeSchedulesCards from './FeeSchedulesCards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeeSchedulesCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
