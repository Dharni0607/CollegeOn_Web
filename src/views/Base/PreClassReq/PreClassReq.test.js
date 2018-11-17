import React from 'react';
import ReactDOM from 'react-dom';
import PreClassReq from './PreClassReq';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PreClassReq />, div);
  ReactDOM.unmountComponentAtNode(div);
});
