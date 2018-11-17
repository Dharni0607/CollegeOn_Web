import React from 'react';
import ReactDOM from 'react-dom';
import AssProCards from './AssProCards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AssProCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
