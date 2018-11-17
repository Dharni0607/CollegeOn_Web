import React from 'react';
import ReactDOM from 'react-dom';
import PreClassReqCards from './PreClassReqCards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PreClassReqCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
