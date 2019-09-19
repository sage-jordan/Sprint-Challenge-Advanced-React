import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from "@testing-library/react";
import { fireEvent } from '@testing-library/react';
import {UseLocalStorage} from './useLocalStorage';

test('renders without crashing', () => {
  const container = rtl.render(<App/>);
  console.log("Container:", container);
});

test('verify alex and megan display', () => {
  const container = rtl.render(<App/>);
  // const alex = container.getByText('Alex Morgan');
  // const megan = container.getByText('Megan Rapinoe');
  const name = container.getByText('name');
  // console.log("Alex:", alex, "Megan:", megan);
  console.log("Name:", name);
});

test('useLocalStorage saves data', () => {
  const storage = rtl.render(<UseLocalStorage/>);
  console.log(storage.debug());
});