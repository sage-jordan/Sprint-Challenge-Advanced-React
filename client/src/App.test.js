import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  const container = render(<App/>);
  console.log("Container:", container);
}) 

test('verify balls and strikes display', () => {
  const container = render(<App/>);
  const balls = container.getByText('Balls');
  const strikes = container.getByText('Strikes');
  console.log("Balls:", balls, "Strikes:", strikes);
});