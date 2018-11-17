import React from 'react';
import ReactDOM from 'react-dom';
import EventsCards from './EventsCards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventsCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
